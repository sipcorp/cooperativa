const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = mongoose.Schema({
   name: {type:String, require:true},
   code:{type:String, require:true},
   price: {type: Number, require:true},
   stock: {type:String,require:true},
   description:{type:String,require:true},
   alert:{type:Number,require:true}
},{collection:'producto'})

module.exports = mongoose.model('producto', ProductoSchema);