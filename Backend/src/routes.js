var express = require('express')
var User = require('./models/titanuser');  
var path = require('path')
    'use strict';



    module.exports.route = function route(app) {
        //var controllers = require('./controllers/controllers');
        
        //SignUp
        app.post('/signup', (req, res)=>{
            console.log(`You have sent me ${req.body}.`)
        })
        
        //servers static content
        app.use('/static', express.static(path.join(__dirname, 'view')))
        
        //Landing page
        app.get('/', (req, res) => {
            res.render('login', {
                title:'Welcome To Titan Pizza',
               
            })
     
        })

       // app.post('/auth',controllers.login) 
        app.post('/auth', function(req, res, next) {
            var email = req.body.email;
            var password = req.body.password;
        
            User.authenticate(email, password, function (error, user) {
                if (error || !user) {
                  var err = new Error('Wrong email or password.');
                  err.status = 401;
                  return next(err);
                } else {
                    req.session.userId = user._id;
                    res.redirect('/home');
                }
              });
        })
       
        //About Titan Pizza
        app.get('/about', (req, res) => {
            res.render('about', {
                title:'About : Titan Pizza',
               
            })
        })

        //Recruitment Info
        app.get('/career', (req, res) => {
            res.render('career', {
                title:'Career at Titan Pizza'
               
            })
        })

        //app.post('/signup', controllers.createAccout);
        
        //Renders SignUP page
        app.get('/signup', function (req, res) {
            // console.log('Under Construction!!');
            res.render('signup', {
                title:'Career at Titan Pizza',
            })
        });

        //Renders the page the user will land on after login.
        app.get('/home', function (req, res, next) {
            //console.log("session user id: " + req.session.userId);
            User.findById(req.session.userId)
            .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                var err = new Error('Not authorized! Go back!');
                err.status = 400;
                return next(err);
                } else {
                    res.render('home', {
                        title:'Welcome to Titan Pizza', user : user
                    })
                }
            }
            });
        });


        //Renders the page with User’s Profile
        app.get('/profile', function (req, res, next) {
            User.findById(req.session.userId)
            .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                var err = new Error('Not authorized! Go back!');
                err.status = 400;
                return next(err);
                } else {
                    res.render('profile', {
                        title:'Welcome to Titan Pizza', user : user
                    })
                }
            }
        });   
    });

        //Renders the page with user’s past orders
        app.get('/pastOrder', function (req, res) {
            console.log('Under Construction!!');
            res.render('pastorder', {
                title:'Welcome to Titan Pizza',
            })
        });
        
        //Renders the page with information for contacting TitanPizza
        app.get('/contactUs', function (req, res) {
            console.log('Under Construction!!');
            res.render('contact', {
                title:'Welcome to Titan Pizza',
            })
        });

        //Renders the page with information for TitanPizza
        app.get('/pizza', function (req, res) {
            console.log('Under Construction!!');
            res.render('pizza', {
                title:'Welcome to Titan Pizza',
            })
        });

        app.get('/logout', function (req, res, next) {
            if (req.session) {
                // delete session object
                req.session.destroy(function (err) {
                  if (err) {
                    return next(err);
                  } else {
                    return res.redirect('/');
                  }
                });
              }
          }); 
    };