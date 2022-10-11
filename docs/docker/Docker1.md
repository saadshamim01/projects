## Docker



### Docker Architecture

*"Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers".*

The engine consists of three major components:

1. **Docker Daemon:** The daemon (`dockerd`) is a process that keeps running in the background and waits for commands from the client. The daemon is capable of managing various Docker objects.
2. **Docker Client:** The client  (`docker`) is a command-line interface program mostly responsible for transporting commands issued by users.
3. **REST API:** The REST API acts as a bridge between the daemon and the client. Any command issued using the client passes through the API to finally reach the daemon.

<img src="https://www.freecodecamp.org/news/content/images/2021/01/docker-run-hello-world.svg">

```
docker <object> <command> <options>
```

In this syntax:

- `object` indicates the type of Docker object you'll be manipulating. This can be a `container`, `image`, `network` or `volume` object.
- `command` indicates the task to be carried out by the daemon, that is the `run` command.
- `options` can be any valid parameter that can override the default behavior of the command, like the `--publish` option for port mapping.

```
docker container run <image name>
```

### Common Commands

```
--publish <host port>:<container port>
```

When you wrote `--publish 8080:80` in the previous sub-section, it meant any request sent to port 8080 of your host system will be forwarded to port 80 inside the container‌.

Detached Mode

```
docker container run --detach --publish 8080:80 fhsinchy/hello-dock
```

Naming Container

```
docker container run --detach --publish 8888:80 --name hello-dock-container fhsinchy/hello-dock
```

Renaming Container

```
docker container rename <container identifier> <new name>
```

Stop Container

```
docker container stop <container identifier>
```

Kill Container

```
docker container kill hello-dock-container-2
```

Start Container

```
docker container start <container identifier>
```

Restart Container

```
docker container restart <container identifier>
```

Create Container

```
docker container create --publish 8080:80 fhsinchy/hello-dock
```

Run Container

```
docker container run <image name> <command>
```



```
pip install git+https://github.com/fhsinchy/rmbyext.git#egg=rmbyext

rmbyext <file extension>
```

### Volume

```
--volume <local file system directory absolute path>:<container file system directory absolute path>:<read write access>
```

Setting up environmental variable

```
 docker exec -it -e VAR=1 ubuntu_bash bash
```





