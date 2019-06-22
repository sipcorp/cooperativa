const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = mongoose.Schema({
   prefix: {type:String, require:true},
   name: {type: String, require:true},
   project: {type:Array,require:true},
   documentID:{type:String,require:true},
   gender:{type:String,require:true},
   birthdate:{type:Date,require:true},
   age:{type:Number,require:true},
   address:{type:String,require:true}
},{collection:'productor'})

module.exports = mongoose.model('productor', ProductoSchema);