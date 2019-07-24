const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProveedorSchema = mongoose.Schema({
    type: { type: String, require: true },
    prefix: { type: String, require: true },
    name: { type: String, require: true },
    content: { type: Array, require: true },
    phone: { type: String, require: true },
    movile: { type: String, require: true },
    address: { type: String, require: true },
    documentID: { type: String, require: true },
    price: { type: Number, require: true },
    contacPerson: { type: String, require: true }
}, { collection: 'proveedor' })

module.exports = mongoose.model('proveedor', ProveedorSchema);