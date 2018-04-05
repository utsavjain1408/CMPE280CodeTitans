/*export const createAccout = (req,res)=>{
    console.log(`Lol !! Account Created`)
}

export const login = (req, res) =>{
    console.log(`You have invoked login`)
}*/
import mongoose from 'mongoose';
var express = require('express');
var router = express.Router();
var User = require('../models/titanuser');

var createAccout = module.exports.createAccout = function createAccout(req, res) {
    console.log("Lol !! Account Created");
};


var login = module.exports.login = function login(req, res) {

};