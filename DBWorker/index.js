import express from 'express'
import nodemon from 'nodemon'
import bodyParser from 'body-parser'
import user from './src/routes/user'
import orders from './src/routes/orders'
import kitchen from './src/routes/kitchen'
import mongoose from 'mongoose'
const app = express();
const PORT = 3000;

//mongoose connection

// mongoose.Promise = global.Promise;
// var ProductCatalogueConnection = mongoose.connect('mongodb://35.194.50.254/ProductCatalogue', {
//   useMongoClient: true
// });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
user(app)
orders(app);
kitchen(app)
app.get('/', (req, res) =>
    res.send(`Node and Express Server ${PORT} port per hal raha rai`)
);

app.listen(PORT, () =>
    console.log(`Aapna server ${PORT} per chal raha rai.`)
);