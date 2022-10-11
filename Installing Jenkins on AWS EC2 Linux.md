docker run -itd --name ansible_master ubuntu /bin/bash

apt update
apt install python ansible openssh-client vim iputils-ping -y

ping 172.17.0.3

ssh-keygen

ssh-copy-id root@172.17.0.3 : yes

vim etc/ansible/hosts

ansible -m ping 172.17.0.3



#Worker node
apt update; apt install ssh vim -y

 passwd root

 vim /etc/ssh/sshd_config

 service ssh restart

 service ssh start



 #### docker network inspect bridge





## Installing Jenkins on AWS EC2 Linux

Jenkins is **used to build and test your product continuously**, so developers can continuously integrate changes into the build. Jenkins is the most popular open source CI/CD tool on the market today and is used in support of DevOps, alongside other cloud native tools.

#### To install Jenkins on Linux

```
sudo amazon-linux-extras install epel -y;
sudo yum update -y;
sudo wget -O /etc/yum.repos.d/jenkins.repo     https://pkg.jenkins.io/redhat-stable/jenkins.repo; 
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key;
sudo yum upgrade -y;
sudo yum install jenkins java-1.8.0-openjdk-devel -y;
sudo systemctl daemon-reload;
```

#### To start & stop Jenkins

```
sudo systemctl start jenkins.service;
sudo systemctl enable jenkins.service;
sudo systemctl status jenkins;

sudo service jenkins stop
```

#### Additional Commands

```
sudo netstat -l
curl localhost:8080

sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

#### To Uninstall Jenkins

```
sudo service jenkins stop sudo yum remove jenkins sudo rm -r /var/lib/jenkins 
```

```
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
            checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/saadshamim01/terraform']]])            

          }
        }
        
        stage ("terraform init") {
            steps {
                sh ('terraform init') 
            }
        }
        
        stage ("terraform Action") {
            steps {
                echo "Terraform action is --> ${action}"
                sh ('terraform ${action} --auto-approve') 
           }
        }
    }
}
```

        stage ("terraform init") {
            steps {
                sh ('terraform init') 
            }
        }
        
        stage ("terraform Action") {
            steps {
                echo "Terraform action is --> ${action}"
                sh '''
                
                terraform apply -var="access_key"="AKIARUJBQMAEFKXNCPMT" -var="secret_key"="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" --auto-approve
                '''
           }
        }

```
sudo yum -y install docker;
sudo systemctl start docker.service;
sudo systemctl enable docker.service;

sudo yum install git -y;
```

```
# Adds ec2-user to the docker group
sudo usermod -a -G docker ec2-user

# Adds jenkins to the docker group
sudo usermod -a -G docker jenkins

# To reboot the instance
sudo reboot 

# Check if jenkins is allowed to run docker commands
sudo -u jenkins docker run hello-world
```

