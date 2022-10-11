## Jenkins on Docker

Jenkins is a self-contained, open source automation server which can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software.

Jenkins can be installed through native system packages, Docker, or even run standalone by any machine with a Java Runtime Environment (JRE) installed.

**Commands**

- **docker pull jenkins:** Pulls the latest image
- **docker images -q:** To get docker image id
- **docker inspect [name]:** To get detail about container.
- **docker ps:** To see the running containers
- **docker stop [name/id]:** To stop docker container

- **docker volume create:** Create a volume
- **docker volume inspect:** Display detailed information on one or more volumes
- **docker volume ls:** List volumes
- **docker volume prune:** Remove all unused local volumes
- **docker volume rm:** Remove one or more volumes

**Main Commands**

Jenkins runs on Tomcat, which uses port 8080 as the default. -p 5000:5000 required to attach slave servers; port 50000 is **used to communicate between master and slaves**. 

Port 8080 exposes the web interface and port 50000 gives you access to a remote Java (JIRA) API. 

- **docker run -p 8080:8080 -p 50000:50000 jenkins/jenkins:** To run docker image, without persistance.

- **docker run --name MyJenkin -p 8080:8080 -p 50000:50000 -v /Users/saadshamim/Desktop/Jenkins:/var/jenkins_home jenkins/jenkins:** To run docker image with persistance (Using folder).
- **docker run --name MyJenkin -p 8080:8080 -p 50000:50000 -v volume_name:/var/jenkins_home jenkins/jenkins:** To run docker image with persistance (Using Volume).

