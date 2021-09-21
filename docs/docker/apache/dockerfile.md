FROM centos
RUN yum -y install httpd
RUN yum clean all
RUN systemctl enable httpd.service
COPY . /var/www/html/
EXPOSE 80
CMD httpd -D FOREGROUND