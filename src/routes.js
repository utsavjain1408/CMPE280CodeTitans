/*import {
    createAccout,
    login
} from './controllers/controllers'

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
        app.get('/', (req, res) => {
            res.sendFile('/view/login.html',{"root": __dirname})
        })
        app.post('/signup', controllers.createAccout);
        app.get('/signup', function (req, res) {
            console.log('Under Construction!!');
            res.sendFile('/view/signup.html',{"root": __dirname})

        });
    };