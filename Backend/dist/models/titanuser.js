'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitanUserSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitanUserSchema = exports.TitanUserSchema = new _mongoose2.default.Schema({
  UUID: {
    type: String,
    required: 'Unique Id Required',
    default: Date.now
  },
  UserName: {
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
  password: {
    type: String,
    required:'Login Required!!'
  }
});