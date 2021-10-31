const { Schema, model } = require('mongoose');

const Users = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  typeUser: { type: String, required: true },

  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = model('Accounts', Users);
