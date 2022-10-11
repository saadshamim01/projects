

## Installing Jenkins on AWS EC2 Ubuntu

export RUNLEVEL=1
apt-get update
apt-get install systemd -y
apt-get install wget -y





# apt-get install gnupg2 -y

apt install openjdk-8-jdk -y
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | apt-key add -
echo deb https://pkg.jenkins.io/debian-stable binary/ | tee /etc/apt/sources.list.d/jenkins.list
apt-get update
apt-get install jenkins -y

service jenkins start | service jenkins status
history > hello.py

echo deb https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list

wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -

 BUILD - Package  Post Build Action Define below details. 

// Copy the war file into the your Server Location

```
sudo mv  ./home/ubuntu/com/target/WebApp.war /home/ubuntu/com; 
```

sudo mv /var/lib/jenkins/workspace/Java_Project/target /WebApp.war ~/

docker stop mycontainer

docker rm mycontainer

docker build -t myimage .

docker run -d --name mycontainer -p 8090:8080 myimage

  cd /home/ubuntu/com; // Goto the Location where DockerFile is present. docker stop mycontainer; // Stop the Container if its running  docker rm mycontainer; // Remove the container docker build -t myimage .; // Create the new Image using Docker file docker run -d --name mycontainer -p 8090:8080 myimage; // Create new Container using the custom Image.

sudo apt-gte git

git --version

docker stop mycontainer;
docker rm mycontainer; 
docker build -t myimage .;
docker run -d --name mycontainer -p 8090:8080 myimage;

```
/var/lib/jenkins/workspace/Java_Project/target/WebApp.war
```

sudo mv  ./home/ubuntu/com/target/WebApp.war /home/ubuntu/com;



```
 1  sudo wget -O /etc/yum.repos.d/jenkins.repo     https://pkg.jenkins.io/redhat-stable/jenkins.repo
    2  sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
    3  sudo dnf upgrade
    4  sudo dnf install chkconfig java-devel
    5  sudo yum update
    6  sudo yum install jenkins
    7  sudo yum install daemonize
    8  sudo yum search jenkins
    9  sudo yum install jenkins.noarch
   10  sudo wget -O /etc/yum.repos.d/jenkins.repo     https://pkg.jenkins.io/redhat-stable/jenkins.repo
   11  sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key

   
   12  sudo yum upgrade
   13  sudo yum install epel-release java-11-openjdk-devel
   14  sudo yum install jenkins
   15  sudo amazon-linux-extras install epel
   16  sudo yum search java
   17  sudo yum update �~@~Sy
   18  sudo wget -O /etc/yum.repos.d/jenkins.repo     https://pkg.jenkins.io/redhat-stable/jenkins.repo
   19  sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
   20  sudo yum upgrade
   21  sudo yum install jenkins java-1.8.0-openjdk-devel -y
  
  22  sudo systemctl daemon-reload
   23  sudo systemctl start jenkins
   24  sudo systemctl status jenkins
   25  sudo netstat -l
   26  curl localhost:80
   27  curl localhost:8080
   28  ls
   29  cat /var/lib/jenkins/secrets/initialAdminPassword
   30  sudo cat /var/lib/jenkins/secrets/initialAdminPassword
   31  sudo systemctl
   32  cd /usr/lib/systemd
   33  ls
   34  find . -name jenkins.service
   35  ls
   36  cd /etc/systemd/
   37  ls
   38  cd system
   39  ls
```

Installing Terraform

```
sudo yum install -y yum-utils;
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo;
sudo yum -y install terraform;
```



terraform plan -var="access_key="AKIARUJBQMAEALNKTNUY" -var="secret_key"="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"

terraform % terraform apply -var="access_key"="AKIARUJBQMAEALNKTNUY" -var="secret_key"="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" --auto-approve

[default]
aws_access_key_id = AKIARUJBQMAEALNKTNUY

aws_secret_access_key = 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

```
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



sudo yum upgrade -y;
sudo yum install jenkins java-1.8.0-openjdk-devel -y;
sudo systemctl daemon-reload;
```

# 