## Apache

#### Build the image

```
docker build -t apache-server .
```

##### Run the image

```
docker run -idt --name apache-app -p 8080:80 apache
-server```