## Spring

- Spring is a powerful open source, application framework created to reduce the complexity of enterprise application development.
- It is light-weighted and loosely coupled.
- It has layered architecture, which allows you to select the components to use, Providing a cohesive framework for J2EE application development.
- Provides support to Struts, Hibernate, Tapestry, EJB, JSF etc

<img src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/06/spring-overview.png.pagespeed.ce_.XVe1noRCMt.png">

Advantages

- Spring Frameworks layered architecture, you can use what you need and leave which you don’t.
- Enables POJO (Plain Old Java Object) Programming which in turn enables continuous integration and testability.
- JDBC is simplified due to Dependency Injection and Inversion of Control.
- Open-source 

Spring Core Container

1. Spring Core
2. Spring Bean
3. SpEL (Spring Expression Language)
4. Spring Context 



**Constructor Injection vs Setter Injection**

|                 **Constructor Injection**                  |                     **Setter Injection**                     |
| :--------------------------------------------------------: | :----------------------------------------------------------: |
|               There is no partial injection.               |               There can be partial injection.                |
|          It doesn’t override the setter property.          |            It overrides the constructor property.            |
| It will create a new instance if any modification is done. | It will not create new instance if any modification is done. |
|            It works better for many properties.            |             It works better for few properties.              |