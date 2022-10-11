#### Build Image
docker build -t [Name Of the Image]  .

#### Run Image
docker container run -it -d --name tomcatcontainer1 -p 8081:8080

#### Options 

-it: to enable Interactive Session/SSH to get into the container at a later point in time

-d: Run the container in the background (always recommended)

--name: name your container

saravak/tomcat8: the Image used to create this container. the Image instantiated as a container

-p 8081:8080:  Forwarding the Container port 8080 to Host 8081


#### Template Instructions

MAINTAINER – Who Crate and manage this container image

FROM – What is the base image, we are going to use to host our container. you can either use a minimal OS image like CentOS, Alpine or you can create your own from the scratch by mentioning SCRATCH as a value to this.

RUN – Commands to Run to make the image( the future container) in the way you want

EXPOSE Do you want your image or application in the image to expose any port to the external world or at least to the host.  For example if you are building Apache HTTP server image you can EXPOSE port 80, In our case it is 8080

CMD The Default Command of the container which gets created using this image.  Every Container must have a Default Command. the Container would run as long as the Default Command is running.

ADD or COPY The files you want to copy into the container from your host.

WORKDIR Define a workspace where the upcoming (or) following set of commands/instructions  should be executed in

Here you can see we have used WORKDIR twice, One is to execute set of commands on the TOMCAT_HOME/CATALINA_HOME  another WORKDIR is to download the Sample Application WAR file and deploy the war into Docker Tomcat Container.

Link: https://www.middlewareinventory.com/blog/docker-tomcat-example-dockerfile-sample/

