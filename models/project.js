const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = mongoose.Schema({
    name: { type: String, require: true },
    iniDate: { type: Date, require: true },
    endDate: { type: Date, require: true },
    categoria: { type: String, require: true },
    benificiarios: { type: Number, require: true },
    beneficio: { type: String, require: true },
    rubros: { type: Array, require: true },
    bitacoraModel: { type: Array, require: true }
}, { collection: 'project' })

module.exports = mongoose.model('project', ProjectSchema);