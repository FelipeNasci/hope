const { Schema, model, Types } = require('mongoose');
const { ObjectId } = Types;

const Communities = new Schema({
  name: { type: String, required: true },
  avatarUrl: { type: String },
  owner: { type: ObjectId, required: true },
  members: { type: Array },
  posts: { type: Array },

  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = model('Communities', Communities);
