const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// PI Schema
const investmentSchema = new Schema({
  type: {
    type: String,
    required: [true, '*Campo obrigatório!’']
  },
  value: {
    type: Float64Array,
    required: [true, '*Campo obrigatório!’']
  },
  date: {
    type: String,
    required: [true, '*Campo obrigatório!’']
  }
// TODO: geo location
});

// criar Modelo_PI baseado em investmentSchema: 'invest'->nome da // coleção
const Investments = mongoose.model('investments', investmentSchema);

// exportar Modelo_PI
module.exports = Investments;