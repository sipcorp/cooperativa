const mongoose = require('mongoose');
const { Schema } = mongoose;

const InvoiceSchema = mongoose.Schema({
    name: {type:String,require:true},
    address: {type:String,require:true},
    phone: {type:String,require:true},
    invoiceNum: {type:String,require:true},
    date: {type:Date,require:true},
    items: {type:Array,require:true},
    status: {type:String,require:true},
    total:{type:Number,require:true}
}, { collection: 'invoice' })

module.exports = mongoose.model('invoice', InvoiceSchema);