## Terraform

- **terraform -v**: Check the version
- **terraform init:** To initialize terraform directory
- **terraform plan:** To see the changes without applying it
- **terraform plan -[action]:**
- **terraform plan -[action] -out=example.plan:** To create a plan and store in a file
- **terraform apply [plan_file]:** To apply the plan
- **terraform apply:** To apply the changes
- **terraform apply --auto-approve:****
- **terraform destroy -target aws_instance.my-web-server:**
- **terraform apply -target aws_instance.my-web-server:**
- **terraform service list:** List resources in the state
- **terraform state show [resource]:** Displays resource details
- **terraform output:**
- **terraform graph:** To visualise the workflow
- **terraform refresh:** Refreshes the output, it will run the output again.
- **terraform apply -var "variable_name"= value:** Pass the value through terminal

// Provider: Allows to talk to set of APIs. Allows us to talk to services. Eg: AWS, GCloud

#### Launching EC2 instance

```terraform
resource "aws_instance" "my-web-server" {
  ami           = "ami-04bde106886a53080"
  instance_type = "t2.micro"
  tags = {
     Name = "ubuntu"
  }
}
```

```terraform

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region     = "ap-south-1"
  access_key = "AKIARUJBQMAEALNKTNUY"
  secret_key = "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"
}

resource "aws_vpc" "first-vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "Production"
  }
}

resource "aws_subnet" "subnet-1" {
  vpc_id     = aws_vpc.first-vpc.id
  cidr_block = "10.0.1.0/24"
  tags = {
    Name = "prod-subnet"
  }
}



```

- Variables can be stored in **terraform.tfvars**. Terraform can directly retrieve values from it.
- For files with different names, we need add flags. **apply -var-file example.tfvars**

**Variables**

```
variable "webserver_ami" {
  type = string
  default = "ami-abc123"
}

resource "aws_instance" "web" {
    ami = var.webserver_ami
}

Console
terraform apply -var="webserver_ami= ami-abc12345"
```

**Data Sources**

```
data "aws_ami" "webserver_ami" {
  most_recent = true
  
  owners = ["self"]
  tags = {
    Name = "webserver"
    Deploy = "true"
}

resource "aws_instance" "web" {
  ami = data.aws_ami.webserver_ami.id
}
```

**Dynamic Data**

```
data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-*"]
  filter{
    name = "virtualization-type"
    values = ["hvm"]
  }
  owners = ["099720109477"]
```

**Modules**

- Bundle together a subset of code
- Pass in arguments
- Requirements for modules
  - main.tf
  - variables.tf
  - output.tf
  - README.md

```
module "web_server" {
  source = "./modules/servers"
  
  web_ami = "ami-12345"
  server_name = "prod-web"
}

Inside modules

varibale "web_ami" {
  type = string
  default = "ami-ab123"
}

variable "server_name" {
  type = string
}

Output Values

output " instance_public_ip" {
  value = aws_instance.web_app.public_ip
}

output "app_bucket" {
  value = aws_s3_bucket.web_app.bucket
}
```







