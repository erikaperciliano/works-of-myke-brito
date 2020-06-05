const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

//configuring template engine
server.set("view engine", "html");

nunjucks.configure("views", {
    express: server
});

//main route
server.get('/', function(req, res){
    return res.render("about");
})

server.get('/portfolio', function(req, res){
    return res.render("portfolio");
})

//call the server
server.listen(5000, function(){
    console.log('Server is runing...');
})
