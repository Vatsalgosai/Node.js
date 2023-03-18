// const http = require("http");   

const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next();     // allow the request to continue in next middleware
});


app.use((req, res, next) => {
    console.log('In another middleware');

});


// create server = http.createServer(app);
// server.listen(3000);

//Instend of this two line we can simply wirte both in one and remove also --- require("http") 

app.listen(3000);