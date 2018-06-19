"use strict";

/*export const createAccout = (req,res)=>{
    console.log(`Lol !! Account Created`)
}

export const login = (req, res) =>{
    console.log(`You have invoked login`)
}*/
var createAccout = module.exports.createAccout = function createAccout(req, res) {
    console.log("Lol !! Account Created");
};

var login = module.exports.login = function login(req, res) {
    console.log("You have invoked login");
};