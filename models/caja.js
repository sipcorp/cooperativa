const mongoose = require('mongoose');
const { Schema } = mongoose;

const CajaSchema = mongoose.Schema({
   amountStart: {type:Number, require:true},
   startDate: {type:Date,require:true},
   endDate:{type:Date,require:true},
   userCode:{type:String,require:false},
   faltante:{type:Number,require:false},
   sobrante:{type:Boolean,require:true},
   amountCredit:{type:String,require:false},
   amountCash:{type:String,require:false}
},{collection:'caja'})

module.exports = mongoose.model('caja', CajaSchema);