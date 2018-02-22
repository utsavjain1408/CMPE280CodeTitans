//Backend

var express = require('express')
var bodyParser = require('body-parser')
var login = require('./dist/controllers/controllers')
var routes = require('./dist/routes')
const PORT = 3050

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.listen(PORT, () =>{
    console.log(`Titan Pizza Server is now serving at ${PORT}`)
})
routes.route(app);