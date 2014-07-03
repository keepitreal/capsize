# PlatyNEM

> PlatyNEM is a full stack TypeScript/JavaScript web/mobile app development boilerplate adapted from the popular [MEAN stack](http://www.mean.io). It serves as a starting point for web apps built with PlatypusTS, Node, Express and Mongo as well as an example of best practices when creating PlatypusTS apps and web apps in general.

## What's included PlatyNEM?

#### PlatypusTS

PlatypusTS is a client-side MVC framework written in TypeScript (which compiles to JavaScript). In addition to providing much-needed structure and a test-driven approach to client-side application development, PlatypusTS also offers functionality like two-way data-binding, dependency injection, routing and much more.

#### Node.js

Node is a platform built on Chrome's V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight, efficient and perfect for building fast, scalable applications.

#### Express

Express is a minimal and flexible server-side web application framework built for node.js. It provides a robust set of features for building single and multi-page web applications.

#### MongoDB

MongoDB is an open-source document database, and the leading NoSQL database. It features document-oriented storage, querying, indexing, auto-sharding and much more. PlatyNEM also includes MongooseJS, the most popular object modeling library for Mongo development.

### Other packages included in PlatyNEM
* Jade - Jade is server side templating for node.js applications
* Mongoose - Mongoose is a popular object modeling library for MongoDB development
* Bootstrap - PlatyNEM comes with the popular Bootstrap 3 CSS framework

## Prerequisites
* Node.js - Download and install [Node](http://nodejs.org/download/).
* MongoDB - Download and install [MongoDB](http://www.mongodb.org/downloads). Once its downloaded, start a server and make sure it is listening on port 27017 (which should be the default).
* TSD - After you install Node, you'll need to global install the TSD package from npm. TSD will download TypeScript definition files for many of the JavaScript libraries used in PlatyNEM:

    ```
    $ npm install tsd -g
    ```

### Optional
* Grunt - Download and install [Grunt](http://gruntjs.com/getting-started).

## Installation

0. First clone the repository into your desired directory. Then cd into your app's directory and install the dependencies with:

    ```
    $ npm install
    ```

0. Install the TypeScript definitions with `tsd`:

    ```
    $ tsd update -so
    ```

0. Open the repository in an IDE like Visual Studio or WebStorm and ensure that the TypeScript files compile to JavaScript. If you are using a text editor (like Sublime Text) or an IDE that doesn't have TypeScript support, you can compile your TypeScript with a Grunt task we've included. You'll just need to remember to include any new TypeScript files you add into the task in Gruntfile.js. To compile, run:

    ```
    $ grunt ts
    ```

0. Ensure that you have a MongoDB server running on port 27017. Typically, once Mongo is installed this can be done from the command line with the following command:

    ```
    $ mongod
    ```

0. Start the node server. We recommend using grunt to start the server:

    ```
    $ grunt
    ```

   You may also use the node CLI to start the server.

    ```
    $ node server/server
    ```

0. Then open your browser and go to:

    ```
    http://localhost:3000
    ```

## Testing
We use Karma/Jasmine for our testing. There are some included tests with code coverage output. You can run these with the following command:

```
$ grunt test
```
