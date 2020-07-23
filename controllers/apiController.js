//importar modelo
const Investments = require('../models/investment') 

exports.test = function (req, res) {
  res.send('Olá! Teste ao Controller');
};

// TODO: listar pontos de interesse da BD
exports.details = function (req, res) {
// procura todos os doc. na BD, guarda em ‘pi’ 
// depois devolve ‘pi’ ao cliente
  Investments.find({}).then(function(investments){
    res.send(investments);
  });
};

// TODO: adicionar novo ponto de interesse

// adicionar novo ponto de interesse
exports.create = function (req, res, next) {
  // cria novo ‘invest’ na BD a partir do request, depois, devolve o
  //‘invest’ criado ao cliente
  Investments.create(req.body).then(function (investments){
    res.send(investments);
  }).catch(next);
};

// TODO: atualizar ponto de interesse
exports.update = function (req, res, next) {
  Investments.findByIdAndUpdate({_id: req.params.id},
    req.body).then(function(){
      Investments.findOne({_id: req.params.id}).then(function(investments){
        res.send(investments);
      });
    }).catch(next);
};

// TODO: apagar ponto de interesse
// ‘_id:’->nome da propriedade na BD, 
// ‘req.params.id’->devolve-me o parametro id na req
exports.delete = function (req, res, next) {
  // apaga ‘pi’ da BD, depois, devolve o ‘pi’ apagado ao cliente
  Investments.findByIdAndRemove({_id: req.params.id}).then(function(investments){
    res.send(investments);
  }).catch(next);
};