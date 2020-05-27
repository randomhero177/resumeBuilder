const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  accomplishments: { type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Resume', schema)