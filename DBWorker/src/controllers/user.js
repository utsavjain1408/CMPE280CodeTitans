import mongoose from 'mongoose';
//import TitanUserSchema from '../models/user'; 

//const user = mongoose.model('UserModel', TitanUserSchema)


export const createNewUser = (req,res) =>{
    
    res.json("createNewUser");
}
export const getUserByEmail = (req,res) =>{
    
    res.json("getUserByEmail");
}
export const updateUserInfo = (req,res) =>{
    
    res.json("updateUserInfo");
}
export const deleteUser = (req,res) =>{
    
    res.json("deleteUser");
}
export const getAllUsers = (req,res) =>{
    
    res.json("getAllUsers");
}