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