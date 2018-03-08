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
    /*var email = req.body.email;
    var password = req.body.password;

    user.findOne({email: email, password: password}, function(err, user) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        if(!user) {
            return res.status(404).send();
        }
        req.session.user = user;
        return res.status(200).send();
    })*/
    console.log("You have invoked login");
};