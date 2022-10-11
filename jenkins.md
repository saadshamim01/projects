Jenkins

Jenkins Architecture 

➢ Jenkins follow the master slave architecture. 

➢ Master Node - Work like a Controller 

➢ Worker Node - Slave/Worker node will work as a Execution Node 

➢ Single Master Node can have Multiple Worker Node. 

➢ Master Controls the Load Distribution on Slave Nodes.

Jenkins Architecture 

- Master Node 
  - Schedule Build Job 
  - Dispatch Build Execution to Slave Node  
  - Monitor Slave and Record the Build Result 
-  Slave Node 
  - Execute Build dispatched by Master

```bash
#!/bin/bash

name=$1
age=$2
echo "Hello, my name is $name and I am $age years old."
```

```
chmod 755 testscript.sh
./testscript.sh Saad 29
```

```
Hard Coded Parameters
Name=Saad
Age=23

/tmp/testscript.sh $Name $Age
```

sudo apt-get install git

mvn --version

Plugin: Github Integration

Manage Global Tool: LocalJDK8

path: `/usr/lib/jvm/java-8-openjdk-amd64/`

Maven path `/usr/share/maven`



Jenkinfile

```
node {
    def app

    stage('Clone repository') {
      

        checkout scm
    }

    stage('Build image') {
  
       app = docker.build("brandonjones085/test")
    }

    stage('Test image') {
  

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        
        docker.withRegistry('https://registry.hub.docker.com', 'git') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}
```

```
Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                // 
            }
        }
        stage('Test') { 
            steps {
                // 
            }
        }
        stage('Deploy') { 
            steps {
                // 
            }
        }
    }
}
```

```
pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
                sh "${pwd()}"
            }
        }

    }
}
```

```bash
Execute Shell Command

#!/bin/bash
echo "hello world"
chmod + file_name

/tmp/jenkins_script/firstscript.sh
```

Using Ansible with Jenkins

```
sudo yum-config-manager --enable epel
sudo yum install ansible

Install ansible plugin in jenkins
Manage plugin: Ansible 

Global Tool configuration
Name ansible2
Path to executable: which ansible (/usr/bin)

New Job (Pipeline)
Piepline

pipeline
```

```
Installing Apache Webserver 

Approach 1

sudo yum update -y;
sudo yum install httpd -y
sudo service httpd status
sudo service httpd start
sudo service httpd status

Open port 80

Approach 2

whoami -> ec2_user
su su 
whoami-> root
hostname -> ip-172-31-7-175.ap-south-1.compute.internal
sudo yum install -y httpd.x86_64
systemctl start httpd.service
systemctl enable httpd.service
sudo su (for root priviledges)
Replace default page with -> echo "Hello world from $(hostname -f)" > /var/www/html/index.html


```

Tomcat Server

```xml
sudo su
cd usr
mkdir java
cd java
sudo yum install wget
wget --no-cookies --no-check-certificate --header "Cookie:gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" 
ls -> we will find the rpm file
sudo yum install jdk-version3232232
java -version


Installing tomcat
wget https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.55/bin/apache-tomcat-9.0.55.tar.gz

tar xvfz apache-tomcat-9.0.55.tar.gz

rm -r apache-tomcat-9.0.55.tar.gz

cd apache-tomcat-9.0.55/

ls

cd bin
./startup.sh
ps -ef | grep tomcat
wget http://localhost:8080 -> Error Login as super user
sudo su
./startup.sh
ps -ef | grep tomcat
wget http://localhost:8080 

cd webapps/manager/META-INF/
<?xml version="1.0" encoding="UTF-8"?>
<Context antiResourceLocking="false" privileged="true" >
  <CookieProcessor className="org.apache.tomcat.util.http.Rfc6265CookieProcessor"
          sameSiteCookies="strict">
  <Manager sessionAttributeValueClassNameFilter="java\.lang\.(?:Boolean|Integer|Long|Number|String)|org\.apache\.catalina\.filters\.CsrfPreventionFilter\$LruCache(?:\$1)?|java\.util\.(?:Linked)?HashMap"/>
        <!--
         <Valve className="org.apache.catalina.valves.RemoteAddrValve"
         allow="127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1" />
        -->
</Context>

vi conf/tomcat-users.xml
  
XML
 <role rolename="manager-gui"/>
  <user username="admin" password="admin" roles="manager-gui"/>

```

Add the war file

NodeJS (Github -> Dockerfile -> Dockerhub)

```
Adding credential to connect to dockerhub

Manage Jenkins Credentials > Add Credential >
username: saadshamim01
password: +Vwek]+!w@cs@D6
id dockerHub

Install CloudBees Docker Build....
Install Docker pipeline plugin
Install Docker plugin

Create Project: Docker Pipeline (Pipeline)

Build Trigger
Description: Pipeline script from SCM

Git
Link


Jenkinsfile
node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
    
        def customImage = docker.build("my-image:${env.BUILD_ID}")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}

Dockerfile
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]

docker build -t saadshamim01/nodejs-app .       
docker run -p 49160:8080 -d saadshamim01/nodejs-app

Push to github


```

Minikiube(Ubuntu)

```
sudo apt-get update -y

curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl

chmod +x ./kubectl

sudo mv ./kubectl /usr/local/bin/kubectl

```

```
Dockerfile Tomcat

FROM centos

RUN mkdir /opt/tomcat/

WORKDIR /opt/tomcat
RUN curl -O https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.55/bin/apache-tomcat-9.0.55.tar.gz
RUN tar xvfz apache*.tar.gz
RUN mv apache-tomcat-9.0.55/* /opt/tomcat/.
RUN yum -y install java
RUN java -version

WORKDIR /opt/tomcat/webapps
RUN curl -O -L https://github.com/AKSarav/SampleWebApp/raw/master/dist/SampleWebApp.war

EXPOSE 8080

CMD ["/opt/tomcat/bin/catalina.sh", "run"]
```

```
docker run --name jenkins-blueocean --rm --detach \
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \
  --publish 8080:8080 --publish 50000:50000 \
  --volume jenkins-data:/var/jenkins_home \
  --volume jenkins-docker-certs:/certs/client:ro \
  --volume "$HOME":/home \
  myjenkins-blueocean:1.1
  
  
  
```

Jenkins Maven Java Project

```
Jenkins-Maven (Freestyle Project)
Install CloudBees Docker plugin and Publish plugin
Install Docker-build step plugin
Install Docker plugin

Github Project: https://github.com/saadshamim01/docker-java-jenkins-integration/
Source Code Management: Git https://github.com/saadshamim01/docker-java-jenkins-integration.git
Branch: */main
Schedule: * * * * *
Build: Invoke Top Level Maven Target
Maven-Version: Maven-1
Commands: clean
install
```

```
Configuring Maven (Check with other sources)

Follow below steps to solve problem. Its work for me.

Uninstall you maven from running environment.

Install Maven form :

wget http://www-eu.apache.org/dist/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz

Extract tar file using:

tar -zxvf apache-maven-3.3.9-bin.tar.gz

Now set M2_HOME in environment. Open vi /etc/profile

End of file add below lines and save file.

export M2_HOME=/opt/apache-maven-3.3.9/

export M2="$M2_HOME"bin

export PATH=$PATH:$M2

Compile this file using source /etc/profile

Your Maven home path is set. Yo can check using echo $M2_HOME command.

Run your project.
```

```
# syntax=docker/dockerfile:1

FROM python:3.8-slim-buster

WORKDIR /python-docker

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]


This line specifically instructs Docker to run our Flask app as a module, as indicated by the "-m" tag. Then it instructs Docker to make the container available externally, such as from our browser, rather than just from within the container. We pass the host port:
```

```
alembic==0.9.6
aniso8601==1.3.0
appnope==0.1.0
astroid==1.6.0
attrs==17.4.0
autopep8==1.3.3
bcrypt==3.1.4
certifi==2017.11.5
cffi==1.11.2
chardet==3.0.4
click==6.7
codacy-coverage==1.3.10
coverage==4.4.2
coveralls==1.2.0
decorator==4.1.2
docopt==0.6.2
Flask==0.12.2
Flask-Bcrypt==0.7.1
Flask-Cors==3.0.3
Flask-JWT-Extended==3.3.4
flask-marshmallow==0.8.0
Flask-Migrate==2.1.1
flask-restplus==0.10.1
Flask-Script==2.0.6
Flask-SQLAlchemy==2.3.2
gunicorn==19.7.1
idna==2.6
isort==4.2.15
itsdangerous==0.24
jedi==0.11.1
Jinja2==2.9.6
jsonify==0.5
jsonschema==2.6.0
lazy-object-proxy==1.3.1
linecache2==1.0.0
Mako==1.0.7
MarkupSafe==2.0.1
marshmallow==2.15.0
marshmallow-sqlalchemy==0.13.2
mccabe==0.6.1
nose2==0.7.2
parso==0.1.1
pexpect==4.3.1
pickleshare==0.7.4
pluggy==0.6.0
prompt-toolkit==1.0.15
psycopg2==2.7.3.2
ptyprocess==0.5.2
py==1.5.2
pycodestyle==2.3.1
pycparser==2.18
Pygments==2.2.0
PyJWT==1.4.2
pylint==1.8.1
pytest==3.3.1
pytest-cov==2.5.1
python-dateutil==2.6.1
python-editor==1.0.3
pytz==2017.3
requests==2.18.4
simplegeneric==0.8.1
six==1.11.0
SQLAlchemy==1.1.15
traceback2==1.4.0
traitlets==4.3.2
unittest2==1.1.0
urllib3==1.22
wcwidth==0.1.7
Werkzeug==0.12.2
wrapt==1.10.11

```

```
from flask import Flask
from flask_restful import Resource, Api

app = 

docker-compose.yml

version: '3'
services:
	product-service:
		build: ./product
		volumes: 
			- ./product:/usr/src/app
		ports:
			- 5000:80
			
			
			
docker-compose up
			
		
```

Kubernetes

Secrets

```
kubectl apply -f secrets.yml` . And see if it worked by checking the secrets via `kubectl get secrets.
```

```
---
apiVersion: v1
kind: Secret
metadata:
  name: flaskapi-secrets
type: Opaque
data:
  db_root_password: <Insert your password here>
```

```
version: "3.8"

services:
  django:
    build: .
    container_name: django
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/usr/src/app/
    ports:
      - "8000:8000"
    depends_on:
      - pgdb

  pgdb:
    image: postgres
    container_name: pgdb
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres

FROM python: 3
ENV PYTHONBUFFERED=1
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install -r requirements.txt

--- 

version: '3.8'

services:
  web:
    build: ./services/web
    command: python manage.py run -h 0.0.0.0
    volumes:
      - ./services/web/:/usr/src/app/
    ports:
      - 5000:5000
    env_file:
      - ./.env.dev
    depends_on:
      - db
  db:
    image: postgres:13-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    environment:
      - POSTGRES_USER=hello_flask
      - POSTGRES_PASSWORD=hello_flask
      - POSTGRES_DB=hello_flask_dev

volumes:
  postgres_data:
```



