const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  yourUrl:{
    type: String,
    required: true
  },
  newUrl:{
    type: String,
    required: true
  },
  id:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('list' , urlSchema)