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



