'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitanKitchenSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitanKitchenSchema = exports.TitanKitchenSchema = new _mongoose2.default.Schema({
  KitchenUID: {
    type: String,
    required: 'Unique Id Required',
    default: Date.now
  },
  KichenCommander: {
    firstName: String,
    lastName: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: Number
  },
  zipsServed: [{
    type: String
  }],
  Password: {
    type: String,
    required: 'Bro, password!! HOw you login without PAssworD!'
  }
});