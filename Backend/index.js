//Backend

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose')
var MongoStore = require('connect-mongo')(session);
var login = require('./src/controllers/controllers')
//require('./src/models/titanuser')
var routes = require('./src/routes')
const path = require('path')
const PORT = 3050


var cors = require('cors')
app.use(cors());
//mongoose connection

mongoose.connect('mongodb://35.194.50.254/ProductCatalogue');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
 

app.set('views', path.join(__dirname, 'src/view'));
app.set('view engine', 'pug');
app.use(session({
    secret: 'work hard',
    resave: true,
    name: 'titan.sid',
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: db
    })
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
routes.route(app);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });
// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    //res.send(err.message);
    res.render('error');
  });


app.listen(PORT, () =>{
    console.log(`Titan Pizza Server is now serving at ${PORT}`)
})
