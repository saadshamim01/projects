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



