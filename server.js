const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'));

//configuring template engine
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server
});

//main route
server.get('/', function(req, res){
    return res.render("about");
})

server.get('/portfolio', function(req, res){

    return res.render("portfolio", {items: videos});
})

//call the server
server.listen(5000, function(){
    console.log('Server is runing...');
})
