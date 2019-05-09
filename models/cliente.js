const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = mongoose.Schema({
   name: {type:String, require:true},
   cedula: {type:String,require:true},
   direccion:{type:String,require:true},
   movile:{type:String,require:false},
   phone:{type:String,require:false},
   member:{type:Boolean,require:true},
   memberCode:{type:String,require:false}
},{collection:'cliente'})

module.exports = mongoose.model('cliente', ClienteSchema);