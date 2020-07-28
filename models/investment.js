const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// PI Schema
const investmentSchema = new Schema({
  type: {
    type: String,
    required: [true, '*Campo obrigatório!’']
  },
  value: {
    type: Number,
    required: [true, '*Campo obrigatório!’']
  },
  date: {
    type: String,
    required: [true, '*Campo obrigatório!’']
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'db-name.users'
  }]
// TODO: geo location
});

const Investments = mongoose.model('investments', investmentSchema);

module.exports = Investments;