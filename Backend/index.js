//Backend

var express = require('express')
var bodyParser = require('body-parser')
var login = require('./src/controllers/controllers')
var routes = require('./src/routes')
const path = require('path')
const PORT = 3050

var app = express()

app.set('views', path.join(__dirname, 'src/view'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.listen(PORT, () =>{
    console.log(`Titan Pizza Server is now serving at ${PORT}`)
})
routes.route(app);