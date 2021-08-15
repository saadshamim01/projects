## Docker 

- Docker is a tool for running application in isolated environment
- Similar to Virtual Machine
- App run in same environment
- Standard for software deployment

**Containers VS VMs**

<img src="https://i.stack.imgur.com/AofsM.png">

Every time container crashes, we have to physically fix, a orchestration management tool will be great. 

### Image

- Image is a temple for creating an environment of your choice.
- Snapshot
- Has everything needed to run app
- OS, Software, App Code
- Running instance of image Image -> Containers

### Commands

- **docker:** Displays all the available methods.

- **docker ps:** Displays all the running containers.

- **docker ps -a:** Displays all the contaners.

- **docker ps -aq:** Display only the container ids.

- **docker images:** Displays all the images.

- **docker container ls: **Displays the running containers.

- **docker stop docker_id:** Stops the container.

- **docker stop docker_name:** Stops the container.

- **docker start container_name:** Starts the container.

- **docker start container_id:** Starts the container.

- **docker rm docker_id:** Delete the container.

- **docker rm $(docker ps -aq):** Deletes all the stopped containers.

- **docker rm -f $(docker ps -aq):** Deletes all the containers.

- **Formatting table**

  ```
  docker ps --format="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
  ```

  ```
  #Step 1
  export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
  
  #Step 2
  docker ps --format=$FORMAT
  ```

**Running a Container**

- **docker run nginx: latest:** Runs a container but waits for the input. Ctrl + C
- **docker run -d nginx:latest:** Runs the container in detached mode, it doesnt wait.
- **docker run -dp 8081:80 nginx:latest:** Maps the local host port 8080 to containers port 80.
- **docker run -dp 8081:80 -p 3000:80 nginx:latest:** Maps multiple local port 3000 & 8081 to containers port 80.
- **docker run --name website -dp 8080:80 nginx:latest:** To create a custom named container with mapped ports.

### Volumes

- Allows sharing of data. Files & Folders.
- Between host and container.

Running a Container with attached volume

- **docker run --name website -v $(pwd):/usr/share/nginx/html:ro -dp 8080:80 nginx:** Running a container with attached volume with read only permissions.
- **docker run --name website -v $(pwd):/usr/share/nginx/html -dp 8080:80 nginx:** Running a container with attached volume with read only permissions.
- **docker exec -it website bash:** To access containers files.
- **Ctrl + D:** To exit container command line.

**Customise Single Page Website**

- Download bootstrap single template and replace the index.html file.

- **docker run --name website-copy --volumes-from website -dp 8081:80 nginx:** Copy Files Between Containers

## Building Images

When we build custom images we dont need to mount volume.

<img src = "https://miro.medium.com/max/1400/1*p8k1b2DZTQEW_yf0hYniXw.png">



- **docker build --help:** To see all the available functions to build docker image.
- **docker build --tag website:latest .** To build image a docker image.
- **docker run --name website -dp 8080:80 website:latest:** Runs the container using image.

```
FROM nginx:latest
ADD . /usr/share/nginx/html
```

### Build API using NodeJS

- Install NodeJs & ExpressJs

- Create a folder user-service-api, cd into it.

- ```js
  node --version
  npm init
  
  //Output
  {
    "name": "user-service-api",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
  }
  ```

  ```
  //Install ExpressJs
  npm install --save express
  ```

  Create index.js file

  ```javascript
  const express = require('express')
  const app = express()
  const port = 3000
  
  app.get('/', (req, res) => {
    res.json([{
      name: "Saad",
      email: "saadshamim01@gmail.com"
    }])
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  ```

- **node index.js:** To run the index.js file

### Docker File For Our API

Creating a Dockerfile

```dockerfile
FROM node:latest

WORKDIR /app
ADD . .
RUN npm install
CMD node index.js
```

- **docker build -t user-service-api:latest:** To build image from dockerfile.
- **docker run --name user-api -dp 3000:3000 user-service-api:latest:** To run the created image.

We dont need to have a node_modules folder because it gets downloaded whenever Dockerfile is loaded, so we add it in .dockerignore file.

```dockerfile
#.dockerignore
node_modules
Dockerfile
.git
```







