const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'));

//configuring template engine
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false, //interpreta link html
    noCache:true
});

//main route
server.get('/', function(req, res){
    const about = {
        avatar_url: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        name: 'Mayk Brito',
        role: 'Instrutor - Rocketseat',
        description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links:[
            {name:'Github', url: 'https://github.com/maykbrito'},
            {name:'Twitter', url: 'https://twitter.com/maykbrito'},
            {name:'Linkedin', url: 'https://www.linkedin.com/in/maykbrito'},
        ]
    }

    return res.render("about", {about});
})

server.get('/portfolio', function(req, res){

    return res.render("portfolio", {items: videos});
})

server.get('/video', function(req, res){
    const id = req.query.id;

    const video = videos.find(function(video){
        return video.id == id
        /*if(video.id == id){
            return true
        }*/
    })

    if(!video){
        return res.send('Video not found!')
    }

    return res.render('video', {item: video})


    res.send(id);
})

//call the server
server.listen(5000, function(){
    console.log('Server is runing...');
})
