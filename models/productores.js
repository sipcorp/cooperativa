const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = mongoose.Schema({
   prefix: {type:String, require:true},
   name: {type: Number, require:true},
   project: {type:Array,require:true},
   documentID:{type:String,require:true},
   gender:{type:Number,require:true},
   birthdate:{type:String,require:true},
   age:{type:Number,require:true},
   address:{type:Array,require:true}
},{collection:'productor'})

module.exports = mongoose.model('productor', ProductoSchema);