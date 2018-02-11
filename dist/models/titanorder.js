'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TitanOrderSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitanOrderSchema = exports.TitanOrderSchema = new _mongoose2.default.Schema({
    UserUID: {
        type: String,
        required: 'Unique Id Required',
        default: Date.now
    },
    TimeStamp: {
        type: String,
        required: 'Unique Id Required',
        default: Date.now
    },
    order: {
        items: {
            itemType: {
                type: String,
                enum: ['pizza', 'side'],
                default: 'pizza'
            },
            sauce: {
                type: String,
                enum: ['light', 'medium', 'extra'],
                default: 'medium'
            },
            toppings: [{
                type: String
            }],
            size: {
                tyoe: String,
                enum: ['medium', 'large', 'titan'],
                default: 'mediium'
            },
            qty: {
                type: Number,
                default: 1
            }
        }
    },
    totalCost: {
        type: Number,
        default: 0
    },
    kitchenID: {
        type: String,
        default: 'this'
    },
    status: {
        type: String,
        enum: ['placed', 'inprep', 'baking', 'packed', 'pickedup'],
        default: 'placed'
    }
});