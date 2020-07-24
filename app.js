// associar as dependências instaladas
const express = require('express');

// inicializar app express
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/keys.config.js');
let port = process.env.PORT || 5000;


mongoose.connect(config.mongodbUri, {useUnifiedTopology: true, useNewUrlParser: true});

  // Confirma ligação na consola
  mongoose.connection.on('connected', function () { 
    console.log('Database connected')
  });
  // Mensagem de Erro
  mongoose.connection.on('error', (err) => {
    console.log('Database error'+err);

  });
  

app.get('/', function(req, res){
  res.send('END POINT INVÁLIDO!');
});


// MIDDLEWARE ******************************************

// este middleware deve estar acima das routes-handlers!
app.use(bodyParser.json());

app.use(cors())

// todo o url começado por '/api' chama as rotas em './routes/api'
const routes = require('./routes/api');
app.use('/api', routes);

app.use(function(err, req, res, next){
  console.log(err);
 // ‘res.status(422)’->muda o status
 res.status(422).send({error: err.message});
});

// FIM MIDDLEWARE *************************************************

app.listen(port, function () {
  console.log('Server listening on port '+ port);
});