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
touch docker-compose.yaml
```


```yaml
#Inside the file

db:
    image: mysql:5.7
    volumes:
        - db_data:/var/lib/mysql
  restart: always
  environment:
    MYSQL_ROOT_PASSWORD: password
    MYSQL_DATABASE: wordpress
    MYSQL_USER: wordpress
    MYSQL_PASSWORD: wordpress
  networks:
    - wpsite
#phpmyadmin
phpmyadmin:
    depends_on:
        - db
  imageL phpmyadmin/phpmyadmin
  restart: always
  ports:
    - '8080:80'
  environment:
    PMA_HOST: db
    MYSQL_ROOT_PASSWORD: password
  networks:
    - wpsite
# Wordpress
wordpress:
depends_on:
    - db
    image: wordpress:latest
    ports:
        - '8000:80'
  restart: always
  volumes: ['./:/var/www/html']
  environment:
    WORDPRESS_DB_HOST: db:3306
    WORDPRESS_DB_USER: wordpress
    WORDPRESS_DB_PASSWORD: wordpress
  networks:
    - wpsite
networks:
    wpsite:
volumes:
    db_data:

```