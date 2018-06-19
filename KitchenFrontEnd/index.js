var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose')
var MongoStore = require('connect-mongo')(session);
//var login = require('./src/controllers/controllers')
//require('./src/models/titanuser')
//var routes = require('./src/routes')
const path = require('path')
const PORT = 3051

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/view/exampl2.html'));

})
app.get('/2', (req, res) => {
    res.sendFile(path.join(__dirname + '/view/httptst.html'));

})
var cors = require('cors')
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'view')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
//routes.route(app);


app.listen(PORT, () =>{
    console.log(`Titan Pizza Server is now serving at ${PORT}`)
})