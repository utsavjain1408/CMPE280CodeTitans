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

    var _controllers = require('./controllers/controllers');
    exports.routes = function routes(app) {
        app.routes('/').post(login);
        app.routes('/signup').post(createAccout);
        app.routes('/:user').get(function (req, res) {
            console.log('Under Construction!!');
        });
    };