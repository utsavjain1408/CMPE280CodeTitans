import mongoose from 'mongoose';

export const TitanOrderSchema = new mongoose.Schema({
  orderUID:{
    type:String,
    required: 'Unique Id Required',
    default: Date.now
  },
  TimeStamp: {
        type:String,
        required: 'Unique Id Required',
        default: Date.now
  },
  userID:{
      type:String,
      required:'Bro Phantom order will not be served.'
  },
  order:{
        items:{
            itemType:{
                type:String,
                enum:['pizza', 'side'],
                default:'pizza'
            },
            sauce:{
                type:String,
                enum:['light','medium', 'extra'],
                default:'medium'
            },
            toppings: [{
                type: String
            }],
            size:{
                type:String,
                enum:['medium', 'large', 'titan'],
                default:'mediium'
            },
            qty:{
                type:Number,
                default:1
            }
        }
  },
  totalCost:{
      type:Number,
      default:0
  },
  kitchenID:{
      type:String,
      default:'this'
  },
  status:{
      type:String,
      enum:['placed','inprep', 'baking','packed','pickedup'],
      default:'placed'
  }
});

export default TitanOrderSchema
