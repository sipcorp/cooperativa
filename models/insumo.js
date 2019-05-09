const mongoose = require('mongoose');
const { Schema } = mongoose;

const InsumoSchema = mongoose.Schema({
   name: {type:String, require:true},
   price: {type: Number, require:true},
   unit: {type:String,require:true},
   description:{type:String,require:true},
   min:{type:Number,require:true},
   proovedor:{type:String,require:false},
   cost:{type:Number,require:true}
},{collection:'insumo'})

module.exports = mongoose.model('insumo', InsumoSchema);