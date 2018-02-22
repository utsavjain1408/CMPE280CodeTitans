import mongoose from 'mongoose';
//import TitanKitchenSchema from '../models/kitchen'; 

//const user = mongoose.model('KitchenModel', TitanKitchenSchema)

export const getKitchenByID = (req,res) =>{
    
    res.json("getKitchenByID");
}

export const getKitchenByZip = (req,res) =>{
    
    res.json("getKitchenByZip");
}

export const createNewKitchen = (req,res) =>{
    
    res.json("createNewKitchen");
}

export const UpdateKitchen = (req,res) =>{
    
    res.json("UpdateKitchen");
}

export const getAllKitchen = (req,res) =>{
    
    res.json("getAllKitchen");
}

export const deleteKitchen = (req,res) =>{
    
    res.json("deleteKitchen");
}