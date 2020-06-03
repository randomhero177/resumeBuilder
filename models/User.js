const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  resumeList: [{ type: Types.ObjectId, ref: 'Resume' }]
})

module.exports = model('User', schema)