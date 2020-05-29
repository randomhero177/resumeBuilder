const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  accomplishments: { type: String },
  avatar: { type: Map, of: String },
  birthday: { type: Date, default: Date.now },
  education: { type: Array, default: [] },
  email: { type: String, required: true },
  experience: { type: Array, default: [] },
  profile: { type: String },
  phone: { type: String },
  position: { type: String },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  languages: { type: Array, default: [] },

  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Resume', schema)