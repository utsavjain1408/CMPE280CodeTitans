var express = require('express')
var bodyParser = require('body-parser')
var login = require('./src/controllers/controllers')
var routes = require('./src/routes')
const PORT = 3051

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.listen(PORT, () =>{
    console.log(`Titan Pizza Server is now serving at ${PORT}`)
})
routes.route(app);

app.use('/home',(req,res) =>{
        res.sendFile('\\src\\view\\login.html',{"root": __dirname})
})

app.get('/test', (req,res)=>{
    var html = '<!DOCTYPE html>\n'
    + '<html lang="en-US">\n'
    + '<head>\n'
    + '    <meta charset="UTF-8">\n'
    + '    <title>Hello, world</title>\n'
    + '</head>\n'
    + '<body>\n'
    + '    <h1>Hello, world!</h1>\n'
    + '</body>\n'
    + '</html>\n';
    res.send(html);
})

app.get('/login', )