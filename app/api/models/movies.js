const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 released_on: {
  type: Date,
  trim: true
 }
});
module.exports = mongoose.model('Movie', MovieSchema)