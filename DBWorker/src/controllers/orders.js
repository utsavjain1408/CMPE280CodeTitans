import mongoose from 'mongoose';
//import TitanOrderSchema from '../models/orders'; 

//const user = mongoose.model('OrderModel', TitanOrderSchema)

export const getAllOrders = (req,res) =>{
    res.json("getAllOrders");
}

export const getActiveOrdersByUser = (req,res) =>{
    
    res.json("getActiveOrdersByUser");
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
    
    res.json("createNewOrder");
}