## Installing Jenkins on AWS EC2 Ubuntu

Jenkins is **used to build and test your product continuously**, so developers can continuously integrate changes into the build. Jenkins is the most popular open source CI/CD tool on the market today and is used in support of DevOps, alongside other cloud native tools.

#### To install Jenkins on Ubuntu

Step 1: Update server packages

```
sudo apt-get update -y
```

Step 2: Install Java Package

```
sudo apt-get install openjdk-8-jdk
```

Step 3: Verify the version

```
java -version
```

