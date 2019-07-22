const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name:{type:String, required:[true,'A name is required'], minlength:[3, "Name must have at least 3 chracters"]},
  type:{type: String, required:[true,'A type is required'], minlength:[3,"Type must have at least 3 characters."]},
  desc:{type:String, required:[true,'A description is required'], minlength:[3,"Description must have at least 3 characters"]},
  skill1: {type: String},
  skill2: {type: String},
  skill3: {type: String},
  likes: {type: Number, default: 0}
},{timestamps:true});

mongoose.model('Pets',PetSchema);