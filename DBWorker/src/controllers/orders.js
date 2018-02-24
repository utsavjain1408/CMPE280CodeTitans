import mongoose from 'mongoose';
import TitanOrderSchema from '../models/orders'; 
import uuid4 from 'uuid/v4'

const order = mongoose.model('OrderModel', TitanOrderSchema)

export const getAllOrders = (req,res) =>{
    console.log(`getAllOrders called`)
    order.find({}, (err, order) => {
        if(err){
          res.send(err);
        }
        console.log(order);
        res.json(order);
    });
}

export const getActiveOrdersByUser = (req,res) =>{
    console.log(`getActiveOrdersByUser called`)
    order.find({userID:req.params.userID, status:{$ne:'pickedup'}}, (err, order) => {
        if(err){
          res.send(err);
        }
        console.log(order);
        res.json(order);
    });
}

export const getPastOrdersByUser = (req,res) =>{
    
    res.json("getPastOrdersByUser");
}

export const getAllOrdersByUser = (req,res) =>{
    
    res.json("getAllOrdersByUser");
}

export const getActiveOrdersByKitchen = (req,res) =>{
    
    res.json("getActiveOrdersByKitchen");
}

export const getPastOrdersByKitchen = (req,res) =>{
    
    res.json("getPastOrdersByKitchen");
}

export const getAllOrdersByKitchen = (req,res) =>{
    
    res.json("getAllOrdersByKitchen");
}

export const createNewOrder = (req,res) =>{
    console.log(`createNewOrder called`)
    let newOrder = new order(req.body);
    newOrder.orderUID = uuid4(req.body)
    newOrder.userID = req.params.userID
    newOrder.save((err, order) => {
    if(err){
      res.send(err);
    }
    res.json(order);
  });
}