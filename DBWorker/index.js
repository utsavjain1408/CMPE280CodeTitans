import express from 'express'
import nodemon from 'nodemon'
import bodyParser from 'body-parser'
import user from './src/routes/user'
import orders from './src/routes/orders'
import kitchen from './src/routes/kitchen'
import mongoose from 'mongoose'
import axios from 'axios';

import { SSL_OP_CIPHER_SERVER_PREFERENCE } from 'constants';
const app = express();
const PORT = 3000;
var cors = require('cors')
app.use(cors());
//mongoose connection

 mongoose.Promise = global.Promise;
var ProductCatalogueConnection = mongoose.connect('mongodb://35.194.50.254/ProductCatalogue', {
   useMongoClient: true
 });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
user(app)
orders(app);
kitchen(app)
app.get('/', (req, res) =>
    res.send(`Node and Express Server running on ${PORT}`)
);
app.post('/place_order',(req, res)=>{
    //console.log(req.body)
    let products = req.body.Products;
    let email = req.body.email;
    let sp = products.split('},');
    let size = sp.length;
    var item = []
    for(var i =0;i<size-1; i++){
        sp[i]+='}';
        // console.log(typeof sp)
        //   console.log(JSON.parse(sp[i]));
        //   console.log(sp[i])

    }
    for(var i =0;i<size; i++){
        sp[i]=String(sp[i])
        sp[i]=sp[i].replace('[','')
        sp[i]=sp[i].replace(']','')
        // console.log(typeof sp)
          console.log(JSON.parse(sp[i]));
        //   console.log(sp[i])

    }
    
    // console.log(typeof sp)

    // console.log(String(products))
    // console.log(sp)
    //console.log(size)
   
    
   axios.post('http://localhost:3000/order/user/'+email, sp).then(res => {
        console.log(res.data);
   }).catch(console.error);
    
    // sp[0].pop()
    // console.log((sp[0])[0])
    // console.log(sp)
    let totalPrice = req.body.totalPrice;
    console.log("Total : "+totalPrice);
    console.log("Email : "+email)
    res.send('http://localhost:3050/empty')
} )

app.listen(PORT, () =>
    console.log(`Server running on ${PORT}.`)
);