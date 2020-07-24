// associar as dependências instaladas
const express = require('express');
const cors = require("cors");
// inicializar app express
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
let port = process.env.port || 5000;


mongoose.connect("mongodb+srv://users:eAeVwwEM4gLnxUPX@cluster0.obocu.gcp.mongodb.net/users?retryWrites=true&w=majority");

// Confirma ligação na consola
mongoose.connection.on('connected', function () {
      
 // 'process.env.port'
});
// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error'+err);

});

app.get('/', function(req, res){
  res.send('END POINT INVÁLIDO!');
});


// MIDDLEWARE ******************************************
app.use(cors());

// este middleware deve estar acima das routes-handlers!
app.use(bodyParser.json());

// todo o url começado por '/api' chama as rotas em './routes/api'
const routes = require('./routes/api');
app.use('/api', routes);

app.use(function(err, req, res, next){
  console.log(err);
 // ‘res.status(422)’->muda o status
 res.status(422).send({error: err.message});
});

// FIM MIDDLEWARE *************************************************

app.listen(port, () =>{
  console.log('Servidor em execução no porto: '+ port);
  console.log('Connected to Database '+'users');
});