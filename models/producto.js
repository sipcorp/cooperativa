const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = mongoose.Schema({
   name: {type:String, require:true},
   price: {type: Number, require:true},
   unit: {type:String,require:true},
   description:{type:String,require:true},
   min:{type:Number,require:true}
},{collection:'product'})

module.exports = mongoose.model('product', ProductoSchema);