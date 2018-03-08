var express = require('express')
var path = require('path')
    'use strict';

   
    module.exports.route = function route(app) {
        var controllers = require('./controllers/controllers');
        app.post('/',controllers.login) 
        //servers static content
        app.use('/static', express.static(path.join(__dirname, 'view')))
        
        //Landing page
        app.get('/', (req, res) => {
            res.render('login', {
                title:'Welcome To Titan Pizza',
               
            })
     
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
                title:'Career at Titan Pizza',
               
            })
        })

        app.post('/signup', controllers.createAccout);
        
        //Renders SignUP page
        app.get('/signup', function (req, res) {
            console.log('Under Construction!!');
            res.render('signup', {
                title:'Career at Titan Pizza',
            })
        });

        //Renders the page the user will land on after login.
        app.get('/home', function (req, res) {
            /*if(!req.session.user) {
                console.log('Need log in first!!');
                return res.status(401).send();
            }*/
            console.log('Under Construction!!');
            res.render('home', {
                title:'Welcome to Titan Pizza',
            })
        });

        //Renders the page with User’s Profile
        app.get('/profile', function (req, res) {
            console.log('Under Construction!!');
            res.render('profile', {
                title:'Welcome to Titan Pizza',
            })
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

        app.get('/logout', function (req, res) {
            delete req.session.user;
            res.redirect('/');
          }); 
    };