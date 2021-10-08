## Installing Jenkins on AWS EC2 Ubuntu

Jenkins is **used to build and test your product continuously**, so developers can continuously integrate changes into the build. Jenkins is the most popular open source CI/CD tool on the market today and is used in support of DevOps, alongside other cloud native tools.

#### To install Jenkins on Ubuntu

Step 1: Update server packages

```bash
sudo apt-get update -y
```

Step 2: Install Java Package

```bash
sudo apt-get install openjdk-8-jdk
```

Step 3: Verify the version

```bash
java -version
```

Step 4: Configure Java Home

```bash
readlink -f $(which java)
>>>> /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java
JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java
>> /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java
echo $JAVA_HOME
export JAVA_HOME
PATH=$PATH:$JAVA_HOME
```

wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -

 
