const e = require('express');
const express = require('express');
const app = express();
const port = 3000
var firstName;
var password;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/diary_setup.html');
})

app.post('/', function(req, res){
    firstName = req.body.fname;
    password = req.body.pass;

    res.redirect('/diary_start');
})

app.get('/diary_start', function(req, res){
    res.sendFile(__dirname + '/public/diary_start.html');
})

app.post('/diary_start', function(req, res){
    if (password == req.body.unlockPass){
        res.redirect('/diary');
    }
})

app.post('/diary_start/first_name', function(req, res){
    res.send(firstName);
})

app.post('/diary_start/password', function(req, res){
    res.send(password);
})

app.get('/diary', function(req, res){
    res.sendFile(__dirname + '/public/diary.html');
})

app.post('/diary', function(req, res){
    res.send(password);
})

app.listen(port, function(){
    console.log('Port ' + port + ' is running');
})
