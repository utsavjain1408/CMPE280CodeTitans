import mongoose from 'mongoose';

export  const TitanKitchenSchema = new mongoose.Schema({
  KitchenUID:{
    type:String,
    required: 'Unique Id Required',
    default: Date.now
  },
  KichenCommander:{
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
    zipsServed:[{
            type: String
    }],
    Password:{
        type:String,
        required:'Login Required!!'
    }  
});
