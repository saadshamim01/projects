## Installing Jenkins on AWS EC2 Linux

Jenkins is **used to build and test your product continuously**, so developers can continuously integrate changes into the build. Jenkins is the most popular open source CI/CD tool on the market today and is used in support of DevOps, alongside other cloud native tools.

#### To install Jenkins on Linux

Step 1: Install Extra Packages for Enterprise Linux (EPEL) repository to allow installation of packages that aren't available in standard repositories.

```
sudo amazon-linux-extras install epel -y;
sudo yum update -y;
```

Step 2: Install Jenkins Repository

```
sudo wget -O /etc/yum.repos.d/jenkins.repo     https://pkg.jenkins.io/redhat-stable/jenkins.repo; 
```

Step 3: Adding Jenkins Organization Sign-In Key to allow trusted organization to install packages on the system.

```
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key;
```

Step 4: Install Java 1.8.0

```
sudo yum install java-1.8.0-openjdk-devel -y;
```

Step 5: Install Jenkins

```
sudo yum install Jenkins -y;
```

Step 6: Upgrading the system

```
sudo yum upgrade -y;
```

Step 7: Reloading the system

```
sudo systemctl daemon-reload;
```

#### To start & stop Jenkins

```
sudo systemctl start jenkins.service;
sudo systemctl enable jenkins.service;
sudo systemctl status jenkins.service;
```

#### Additional Commands

```
sudo netstat -l
curl localhost:8080

# To get admin passowrd
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

#### To Uninstall Jenkins

```
sudo service jenkins stop sudo yum remove jenkins sudo rm -r /var/lib/jenkins 
```

#### To install Docker

```
sudo yum -y install docker;
sudo systemctl start docker.service;
sudo systemctl enable docker.service;
```

#### To install Git

```
sudo yum -y install git;
```

#### Adding jenkins and ec2-user to docker group

```
###Adding jenkins and ec2-user to docker group
sudo usermod -a -G docker jenkins
sudo usermod -a -G docker ec2-user
```

#### Testing

```
#Checking if permissions work or not
sudo -u jenkins docker run hello-world
```



