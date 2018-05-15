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
app.get('/past_order/:email',(req,res)=>{
    res.sendFile('/src/controllers/pastorder.html' , { root : __dirname});

})
app.post('/place_order',(req, res)=>{
    let products = req.body.Products;
    let email = req.body.email;
    let sp = products.split('},');
    let size = sp.length;
    var item = []
    var qty=[]
    let totalCost = req.body.totalPrice;
    let order={}
    let x={}
    for(var i =0;i<size-1; i++){
        sp[i]+='}';
    }
    for(var i =0;i<size; i++){
        sp[i]=String(sp[i])
        sp[i]=sp[i].replace('[','')
        sp[i]=sp[i].replace(']','')
          console.log(JSON.parse(sp[i]));
          x=JSON.parse(sp[i])
          item.push({
            toppings:String(x.topping),
            qty:Number(x.qty)
          })
    }
    var TitanOrder= {}
    order.items= item
    TitanOrder.userID= String(email)
    TitanOrder.order=order
    TitanOrder.totalCost=totalCost
   axios.post('http://35.194.50.254:3000/order/user/'+email, TitanOrder).then(res => {
        console.log(res.data);
   }).catch(console.error);
    console.log("Total : "+totalCost);
    console.log("Email : "+email)
    console.log(TitanOrder.order)
    res.redirect('http://35.194.50.254:3050/empty')
} )

app.listen(PORT, () =>
    console.log(`Server running on ${PORT}.`)
);