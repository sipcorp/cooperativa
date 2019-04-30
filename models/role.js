const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoleSchema = mongoose.Schema({
   name:{type:String,require:true},
   permission:{type:Array,require:true}
},{collection:'role'})

module.exports = mongoose.model('role', RoleSchema);