import {
    createAccout,
    login
} from './controllers/controllers'
var express = require('express')
var path = require('path')

//var logo = require('./view/pizzaLogo.png')
/*
export const routes = (app) => {
    app.routes('/')
        .post(login)
    app.routes('/signup')
        .post(createAccout)
    app.routes('/:user')
        .get((req,res)=>{
                console.log(`Under Construction!!`)
        })
    }*/
    'use strict';

   
    module.exports.route = function route(app) {
        var controllers = require('./controllers/controllers');
        app.post('/',controllers.login)
        app.use('/static', express.static(path.join(__dirname, 'view')))
        app.get('/', (req, res) => {
            res.render('login', {
                title:'Welcome To Titan Pizza',
                //logo: express.static(path.join(__dirname, 'view'))
            })
            //res.sendFile('/view/login.html',{"root": __dirname})
        })
        app.get('/about', (req, res) => {
            res.render('about', {
                title:'About : Titan Pizza',
                //logo: express.static(path.join(__dirname, 'view'))
            })
            //res.sendFile('/view/login.html',{"root": __dirname})
        })
        app.get('/career', (req, res) => {
            res.render('career', {
                title:'Career at Titan Pizza',
                //logo: express.static(path.join(__dirname, 'view'))
            })
            //res.sendFile('/view/login.html',{"root": __dirname})
        })
        app.post('/signup', controllers.createAccout);
        app.get('/signup', function (req, res) {
            console.log('Under Construction!!');
            res.sendFile('/view/signup.html',{"root": __dirname})

        });
    };