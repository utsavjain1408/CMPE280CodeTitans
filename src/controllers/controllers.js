/*export const createAccout = (req,res)=>{
    console.log(`Lol !! Account Created`)
}

export const login = (req, res) =>{
    console.log(`You have invoked login`)
}*/
var createAccout = exports.createAccout = function createAccout(req, res) {
    console.log("Lol !! Account Created");
};

var login = exports.login = function login(req, res) {
    console.log("You have invoked login");
};