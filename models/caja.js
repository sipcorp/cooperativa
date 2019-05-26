const mongoose = require('mongoose');
const { Schema } = mongoose;

const CajaSchema = mongoose.Schema({
   amountStart: {type:Number, require:true},
   startDate: {type:Date,require:true},
   endDate:{type:Date,require:true},
   userCode:{type:String,require:true},
   faltante:{type:Number,require:false},
   sobrante:{type:Boolean,require:false},
   cashCount:{type:Array,require:true}
},{collection:'caja'})

module.exports = mongoose.model('caja', CajaSchema);