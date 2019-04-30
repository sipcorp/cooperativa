const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = mongoose.Schema({
    name:String,
    startDate:Date,
    endDate: Date,
    categoria:String,
    benificiarios: Number,
    beneficio:String,
    rubros: Array,
    bitacoraModel:Array
},{collection:'project'})

module.exports = mongoose.model('project', ProjectSchema);