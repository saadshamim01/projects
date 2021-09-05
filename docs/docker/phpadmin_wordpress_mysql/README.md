## Hosting a Website

**Docker Images**

- MYSQL
- phpmyadmin

**Common Commands**

- docker ps: Shows the containers on machine.
- docker images: Shows the images, if not present then it downloads it.
- docker-compose up -d: Creates the network, volume and database.

Create a docker yaml file using:

```
touch docker-compose.yml
```

**Steps**

1. docker ps: To check if there are containers running on machine.
2. docker images: To check if the required images are present.
3. docker compose -d: To start network, volume and database. (Starting Container)
4. docker ps: Check if the new container has started.

