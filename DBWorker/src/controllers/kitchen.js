import mongoose from 'mongoose';
import TitanKitchenSchema from '../models/kitchen'; 
import uuid4 from 'uuid/v4'

const kitchen = mongoose.model('KitchenModel', TitanKitchenSchema)

export const getKitchenByID = (req,res) =>{
    console.log(`getKitchenByID called`)
    kitchen.findOne({KitchenUID:req.params.id}, (err, kitchen) => {
        if(err){
          res.send(err);
        }
        console.log(req.params.id);
        console.log(kitchen);
        res.json(kitchen);
       });
}

export const getKitchenByZip = (req,res) =>{
    console.log(`getKitchenByZip called`)
    kitchen.findOne({'address.zip':req.params.zip}, (err, kitchen) => {
        if(err){
          res.send(err);
        }
        console.log(req.params.zip);
        console.log(kitchen);
        res.json(kitchen);
       });
}

export const createNewKitchen = (req,res) =>{
    console.log(`createNewKitchen called`)
    let newKitchen = new kitchen(req.body);
    newKitchen.KitchenUID = uuid4(req.body)
    newKitchen.save((err, kitchen) => {
    if(err){
      res.send(err);
    }
    res.json(kitchen);
  });
}

export const UpdateKitchen = (req,res) =>{
    console.log(`UpdateKitchen called`)
    kitchen.findOneAndUpdate({KitchenUID:req.params.id}, req.body, {new:true}, (err, kitchen) => {
        if(err){
          res.send(err);
        }
        res.json(kitchen);
      });
}

export const getAllKitchen = (req,res) =>{
    console.log(`getAllKitchen called`)
    kitchen.find({}, (err, kitchen) => {
        if(err){
          res.send(err);
        }
        console.log(kitchen);
        res.json(kitchen);
    });
}

export const deleteKitchen = (req,res) =>{
    console.log(`deleteKitchen called`)
    kitchen.remove({KitchenUID:req.params.id}, (err, kitchen) =>{
        if(err){
            res.send(err);
        }
        res.json(kitchen);
    });
}