const { Schema, model } = require('mongoose');

const Accounts = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accountType: { type: String, required: true },
  hashRecover: { type: String },

  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = model('Accounts', Accounts);
