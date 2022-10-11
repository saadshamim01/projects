## What is Express.js?

Express.js is a Node js web application server framework, which is specifically designed for building single-page, multi-page, and hybrid web applications.

It has become the standard server framework for node.js. Express is the backend part of something known as the MEAN stack.

The MEAN is a free and open-source[ JavaScript ](https://www.guru99.com/interactive-javascript-tutorials.html)software stack for building dynamic web sites and web applications which has the following components;

**1) MongoDB** – The standard NoSQL database

**2) Express.js** – The default web applications framework

**3) Angular.js** – The JavaScript MVC framework used for web applications

**4) Node.js** – Framework used for scalable server-side and networking applications.

The Express.js framework makes it very easy to develop an application which can be used to handle multiple types of requests like the GET, PUT, and POST and DELETE requests.

The general syntax for a route is shown below

```
app.METHOD(PATH, HANDLER)
```

Wherein,

1) app is an instance of the express module

2) METHOD is an HTTP request method (GET, POST, PUT or DELETE)

3) PATH is a path on the server.

4) HANDLER is the function executed when the route is matched.

## Creating a custom promise

A custom promise can be created by using a node module called ‘q.’ The ‘q’ library needs to be downloaded and installed using the node package manager. After using the ‘q’ library, the method “denodeify” can be called which will cause any function to become a function which returns a promise.

In the example below, we will create a simple function called “Add” which will add 2 numbers. We will convert this function into a function to return a promise.

![Screen Shot 2021-10-20 at 12.07.24 PM](/Users/saadshamim/Desktop/Screen Shot 2021-10-20 at 12.07.24 PM.png)

##  What is Bluebird JS?

Bluebird JS is a fully-featured Promise library for JavaScript. The strongest feature of Bluebird is that it allows you to “promisify” other Node modules in order to use them asynchronously.

Use BlueBird to make the[ MongoDB ](https://www.guru99.com/mongodb-tutorials.html)module run asynchronously. 

**npm install bluebird**

![Screen Shot 2021-10-20 at 12.09.45 PM](/Users/saadshamim/Desktop/Screen Shot 2021-10-20 at 12.09.33 PM.png)

![Screen Shot 2021-10-20 at 12.09.33 PM](/Users/saadshamim/Desktop/Screen Shot 2021-10-20 at 12.09.45 PM.png)

## What are generators?

Generators have become quite famous in [Node.js](https://www.guru99.com/node-js-tutorial.html) in recent times and that is probably because of what they are capable of doing.

- Generators are function executions that can be suspended and resumed at a later point.
- Generators are useful when carrying out concepts such as ‘lazy execution’. This basically means that by suspending execution and resuming at will, we are able to pull values only when we need to.

Generators have the below 2 key methods.

1. **Yield method** – The yield method is called in a function to halt the execution of the function at the specific line where the yield method is called.
2. **Next method** – This method is called from the main application to resume the execution of a function which has a yield method. The execution of the function will continue till the next yield method or till the end of the method.

![Screen Shot 2021-10-20 at 12.14.42 PM](/Users/saadshamim/Desktop/Screen Shot 2021-10-20 at 12.14.42 PM.png)

### Code Explanation:-

1. The first step is to define our generator “function”. Note that this is done by adding a “*” to the function keyword. We are then defining a function called Add which takes a parameter of x.
2. The yield keyword is a specific to generators. This makes it a powerful construct for pausing a function in the middle of anything. So here, the function execution will be halted till we invoke the next() function, which will be done in Step4. At this point, the value of x will become 6 and the execution of the function will be stopped.
3. This is where we first call the generator function and send the value of 5 to our Add function. This value will be substituted in the x parameter of our Add function.
4. Once we call the next() function, the Add() function will resume the execution. When the next statement var y= yield(null) will be executed, the Add() function will again stop executing.
5. Now after calling the next() function again, the next statements will run, and the combined value of x=5 and y=6 will be added and returned.

## Callbacks vs. generators

Generators are used to solve the problem of what is known as callback hell. Sometimes callback functions become so nested during the development of a Node.js application that it just becomes too complicated to use callback functions.

## Summary

Generators can also be used to alleviate the problems with nested callbacks and assist in removing what is known as the callback hell. Generators are used to halt the processing of a function. This is accomplished by usage of the ‘yield’ method in the asynchronous function.

## Jasmine for testing Node.js applications

Jasmine is a **Behavior Driven Development(BDD)** testing framework for JavaScript. It does **not** rely on browsers, DOM, or any JavaScript framework. Thus, it’s suited for websites, Node.js projects, or anywhere that JavaScript can run. To start using Jasmine, you need to first download and install the necessary Jasmine modules.

### npm install jasmine-node

**Step 2)** Initialize the Jasmine Environment
Initializing the project – By doing this, jasmine creates a spec directory and configuration json for you. The spec directory is used to store all your test files. By doing this, jasmine will know where all your tests are, and then can execute them accordingly. The [JSON](https://www.guru99.com/json-tutorial-example.html) file is used to store specific configuration information about jasmine.

To initialize the jasmine environment, run the below command

### jasmine init

**Step 3)** Inspect your configuration file.
The configuration file will be stored in the spec/support folder as jasmine.json. This file enumerates the source files and spec files you would like the Jasmine runner to include.





