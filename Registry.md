Registry

- Create Role: EC2 -> Attach Policy -> AmazonEC2ContainerRegistryPowerUser
- Role Name: jenkins, Role Description: Allows EC2 instances to call AWS services on your behalf.

```
docker run hello-world
aws ecr get-login --no-include-email --region ap-south-1 > ./login
source ./login
docker tag hello-world:latest 112276299784.dkr.ecr.ap-south-1.amazonaws.com/hello-world:latest
docker push 112276299784.dkr.ecr.ap-south-1.amazonaws.com/hello-world:latest
```



```
# Login the AWS EKS repository
aws ecr get-login --no-include-email --region ap-south-1


# Create two repositories: example-webapp-builder & example-webapp

# Clone the repository


# Build dockerfile.builder
docker build -t 112276299784.dkr.ecr.ap-south-1.amazonaws.com/example-webapp-builder:$(git rev-parse HEAD) -f Dockerfile.builder .

#Pushing the docker image in docker repository
docker push 112276299784.dkr.ecr.ap-south-1.amazonaws.com/example-webapp-builder:$(git rev-parse HEAD)

#To do something
docker run --rm -v "$PWD:/work" 112276299784.dkr.ecr.ap-south-1.amazonaws.com/example-webapp-builder:$(git rev-parse HEAD) bash -c "cd /work; lein uberjar"

# Building the dockerfile
docker build -t 112276299784.dkr.ecr.ap-south-1.amazonaws.com/example-webapp:$(git rev-parse HEAD) .

# Pushing the docker image in docker repository
docker push 112276299784.dkr.ecr.ap-south-1.amazonaws.com/example-webapp:$(git rev-parse HEAD)

# Run docker image from repository
docker run --rm -p 3000:3000 112276299784.dkr.ecr.ap-south-1.amazonaws.com/example-webapp:$(git rev-parse HEAD)


```



```
Install Extra Packages for Enterprise Linux (EPEL) repository to allow installation of packages that aren't available in standard repositories
sudo amazon-linux-extras install epel -y;
sudo yum update -y;
# Adding Jenkins repository
sudo wget -O /etc/yum.repos.d/jenkins.repo     https://pkg.jenkins.io/redhat-stable/jenkins.repo; 

# Adding Jenkins Organization Sign-In Key to allow trusted organization to install packages on the system.
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key;

# Installing Java
sudo yum install java-1.8.0-openjdk-devel -y;

# Installing Jenkins
sudo yum install Jenkins -y;

Upgrading the system
sudo yum upgrade -y;

# Reloading the system
sudo systemctl daemon-reload;

sudo yum install jenkins java-1.8.0-openjdk-devel -y;
```



docker run --rm -v "$PWD:/work" 112276299784.dkr.ecr.ap-south-1.amazonaws.com/example-webapp-builder:$(git rev-parse HEAD) bash -c "cd /work;" lein uberjar"

docker push 112276299784.dkr.ecr.ap-south-1.amazonaws.com/example-webapp-builder:$(git rev-parse HEAD)

# 