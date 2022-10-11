## Ansible playbook from Jenkins pipeline



Configured using 2 EC2 instances:

1. Server
2. Jenkins

#### Server

To install Ansible

```
sudo amazon-linux-extras install ansible2
sudo yum install git
```

Pipeline 

```
pipeline{
    agent any
    stages{
        stage('SCM Checkout'){
            steps{
                git branch: 'main', url: 'https://github.com/saadshamim01/ci-cd-ansible'
            }
        }
        stage('Execute Ansible Playbook'){
            steps {
                ansiblePlaybook credentialsId: 'private-key', disableHostKeyChecking: true, installation: 'ansible2', inventory: 'dev.inv', playbook: 'apache.yml'
            }
        }
    }
}
```

#### Jenkins 

To install Jenkins

```
sudo amazon-linux-extras install epel -y
sudo yum update -y
sudo wget -O /etc/yum.repos.d/jenkins.repo     https://pkg.jenkins.io/redhat-stable/jenkins.repo 
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key 
sudo yum upgrade -y
sudo yum install jenkins java-1.8.0-openjdk-devel -y
sudo systemctl daemon-reload
sudo yum install git
```

# 
