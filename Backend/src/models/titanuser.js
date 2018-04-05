var mongoose = require('mongoose');

var TitanUserSchema = new mongoose.Schema({
  UUID:{
    type:String,
    required: 'Unique Id Required',
    default: Date.now
  },
  UserName:{
    firstName:String,
    lastName: String
  },
  email:{
    type:String
  },
  phoneNumber:{
    type:Number
  },
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: Number
    },
  password:{
        type:String,
        required:'Bro, Password is needed.'
    }
});

//authenticate input against database
TitanUserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({email: email, password: password})
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }else {
        return callback(null, user);
      }
    });
   
}

var User =  mongoose.model('usermodels', TitanUserSchema)
module.exports = User;



