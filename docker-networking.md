### Docker Networking

- Docker containers and services can be connected with each other.
- Containers and Services don’t need to be aware, where they are deployed. 
- Container and Services can communicate, Whether your Docker hosts run Linux, Windows, or a mix of the two.
- This all possible because of default drivers in Docker
- Each Container connect to virtual private network called ‘bridge’.
- bridge : This is default Network driver of Docker. 
- All Containers on same bridge can communicate each other with-out -p (port) 
- **Best Practice to create Networks :** network “sql_php_nwt” for mySQL and PHP Containers network “mongo_nwt” for mongo and PHP Containers
- Docker Network is easy to Plugged-in in Containers. 
- User is allow to Create Multiple VPN. 
- Create Multiple Rules for Single Network. 
- Attach Multiple Containers to One Network, and Attach single container to more than One Network or no need to attach any network to container.
- Start Container to allow traffic from Port on Host Machine 
  - `docker container run -p : -d image`
- Find the traffic and protocol on container docker port 
  - `docker port <container_id> `
- Find Docker Container IP 
  - `docker inspect `

![Screen Shot 2021-11-27 at 7.00.44 PM](/Users/saadshamim/Desktop/Screen Shot 2021-11-27 at 7.00.44 PM.png)

#### Docker Network

By default bridge, host, null drivers are working

- Create New Network on Host Machine, command creates ‘bridge’ network by default.

  `docker network create`

- Create a bridge network 

  `docker network create -d bridge my-bridge-network`

- Connect container to the network, after connecting container on same network can talk to another without any port.

  `docker network connect <network_name> <container_name>`

- To disconnect a container from network

  `docker network disconnect <network_name> <container_name>`

- To run a container on custom network

  `docker container run -dp 8081:80 --name <container_name> --network <network_id> <image>`

- Show all network

  `docker network ls`

- Filter the network using, filter containing bridge

`docker network ls -f driver=bridge`

- Custom Formatting

  `docker network ls --format "{{.ID}}: {{.Driver}}"`

- Insepect any network, return information in json format

  `docker network inspect bridge`

#### DNS

- DNS stands for Domain Name System. 
- DNS is how domain names are translated into IP addresses.
-  DNS is what allows you to use your web browser to find web sites. 
- DNS makes it possible for us to use easy to remember domain names in place of complex IP addresses.
- Containers uses DNS to communicate. (BECAUSE IF THE CONTAINER STOPS THE IP CAN BE ASSIGNED TO ANOTHER CONTAINER)
- Containers don’t use IP address to Communicate.

### Docker Images

- In Docker, everything is based on Images. 
- An image is a combination of a file system and parameters. Images contains the binaries and dependencies. 
- Images Contains the data require to run the Image.
- List Docker Images docker images.
- Images don’t contains the OS, and OS packages.

#### Dockerhub Registry

**Docker Images:**

- Base Image : Images that have no parent image, usually images with an OS like ubuntu, busybox or debian. 
- Child Images : Images that build on base images and add additional functionality. 
- Official images : Images that are officially maintained and supported by the folks at Docker. These are typically one word long. 
- User images : Images created and shared by users like you and me. They build on base images and add additional functionality. Typically, these are formatted as user/image-name.

**Commands**

`docker pull <image_name>` Pull docker image from registry

`docker pull <image_name>:<image_version>`: Pull a specific version

#### Docker Image and Layers

- Each image consists of a series of layers. 
- Docker makes use of union file systems to combine these layers into a single image. 
- Union file systems allow files and directories of separate file systems, known as branches. 
- Show Image Layers: `docker history <container_id>`
- For more detail `docker inspect <container_id>`
-  History command shows different layers, command used for each layer, and the exact size of each image.

#### **Docker Tags

By default it takes ‘latest’ tag.

- To tag the image, create a new image with specified tag.

  `docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]`

  Example

  `docker tag ubuntu ubuntutest`

  `docker tag ubuntu:latest ubuntutest:test`

#### Pushing Image

- Command to login:

   `docker login` 

- Push Image on Docker Hub: [Correct Format]

  `docker image push USER/Image-name:version`

- Authentication stored location

  `cat /root/.docker/config.json`

#### Dockerfile

- Docker can build images automatically by reading the instructions from a Dockerfile. 

- A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. 

- A Docker image consists of read-only layers each of which represents a Dockerfile instruction. 

- Command to build image from Dockerfile:

   `docker build -f` 

**Commands**

- Docker file Instructions are used to Create the Docker Images. 

**FROM**

- The FROM instruction initializes a new build stage and sets the Base Image for subsequent instructions. 
- A valid Dockerfile must start with a FROM instruction. 
- Base Image can be any valid image. 

**LABEL** 

- LABEL added to image to organize images by project, record licensing information. 

- For each label, add a line beginning with LABEL and with one or more key-value pairs. 

  `LABEL com.example.version=“0.0.1-beta"`

  `LABEL vendor1="ACME Incorporated`

**RUN** 

- RUN instruction will execute any commands in a new layer on top of the current image and commit the results. 
- The resulting committed image will be used for the next step in the Dockerfile. 
- `FROM ubuntu:14.04`
- `RUN apt-get update` 
- `RUN apt-get install -y curl`

**CMD** 

- CMD instruction should be used to run the software contained by your image, along with any arguments. 
- CMD [“executable","param1","param2"]
- There can only be one CMD instruction in a Dockerfile. If you list more than one CMD then only the last CMD will take effect. 
- The main purpose of a CMD is to provide defaults for an executing container.

**EXPOSE** 

- EXPOSE instruction indicates the ports on which a container listens for connections. 

- `EXPOSE  <port>` 

- ENV : ENV instruction sets the environment variable to the value . 

- To make new software easier to run, you can use ENV to update the PATH environment variable for the software your container installs. 

  `ENV PATH /usr/local/nginx/bin:$PATH`

**ADD**

- ADD instruction copies new files, directories or remote file URLs from  and adds them to the filesystem of the image at the path . 

  `ADD hom* /mydir/` # adds all files starting with "home"

**VOLUME**

- VOLUME instruction should be used to expose any database storage area, configuration storage, or files/ folders created by your docker container. 

**WORKDIR**

- WORKDIR instruction sets the working directory for any RUN, CMD, ADD instructions that follow it in the Dockerfil

#### Building Dockerfile

Building image from dockerfile

`docker build -t ImageName:TagName dir`

-t: to mention tag

```dockerfile
FROM 'ubuntu:latest'

LABEL version="0.0.1"
LABEL maintainer="saadshamim01@gmail.com"

RUN apt-get update && apt-get upgrade -y

RUN apt-get install nginx -y

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]
```

**Custom-nginx**

```dockerfile
FROM nginx:latest

# Identifying the maintainer of the image
LABEL version="0.0.1"
LABEL maintainer="saadshamim01@gmail.com"

# Update the working directory
WORKDIR /usr/share/nginx/html

# Replace index.html with custom file
COPY index.html index.html
```

**Custom-python**

```dockerfile
FROM python:latest

LABEL version="0.0.1"
LABEL maintainer="saadshamim01@gmail.com"

ADD script.py /

CMD [ "python", "./script.py" ]


n=15
for i in range(0,n):
	print (((n-(i+1))*' ')+(((2*i)+1)*'*'))
for i in range(1,n):
	print (((i)*' ')+(((((n-i)*2)-1)*'*')))

docker image build -t saadshamim01/custom-python:0.0.1
docker container run saadshamim01/custom-python:0.0.1
docker image push saadshamim01/custom-python:0.0.1
docker image rm saadshamim01/custom-python:0.0.1
docker pull saadshamim01/custom-python:0.0.1
```

#### Docker Data Management





