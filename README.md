web-app
=======

A little project creating a simple web app.

## First
You need a code editor, for example either of these
* [Sublime](http://www.sublimetext.com)
* [Text Mate](http://macromates.com/download)   

Some more tools...
* Git

## Running local server
We will use node.js to run a simple web server

Go to the [Node](http://nodejs.org) web page, press the Install button and go through the installation steps. 
Open a terminal window and check that node is there

    node --version

Create a project folder and go there

    mkdir web-app 
    cd web-app

We will use a node library, called Express, that makes it simple to write a web server.
npm (node package manager) is a tool to install libraries for node.js.

Install Express library (or module)

    npm install express

Copy the file server.js in this repo into the project folder and run it

    node server.js

## Using Git


## Web page
In your project folder, create a folder for web pages

    mkdir public

We will use [Bootstrap](http://getbootstrap.com/getting-started/), which is a framework that simplifies making good looking web pages.
Download the Bootstrap libraries by pressing the button on the [Bootstrap page](http://getbootstrap.com/getting-started/). 
Go into the Mac's Downloads folder, find the Bootstrap folder, and copy the img, js, css folders to your project/public folder

Copy the file bootstrap101.html in the repo above to the public folder.

Now, point your browser to this web page: [http://localhost:3000/bootstrap101.html](http://localhost:3000/bootstrap101.html)

## Deploying to cloud
Create an account at [Heroku](https://www.heroku.com). 


