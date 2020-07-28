### Este Projeto foi desenvolvido para avaliação de conhecimentos no desenvolvimento FullStack

### Link para repositório - FrontEnd
https://github.com/Ingrid27/fullstackFrontend

### Link para repositório - BackEnd
https://github.com/Ingrid27/fullstackBackend

### Informações 

a parte BackEnd foi desenvolvida com  Node.js para API, hospedada no HEROKU, e o MongoDB para o banco de dado.

Link para API: https://api-fullstackgo.herokuapp.com/api/details

## Para utilzar o projeto:

### Para obter o arquivo digite o comando:

git clone https://github.com/Ingrid27/fullstackBackend.git

### Depois entre no diretório onde foi clonado
 
 cd fullstackFrontend
 
 ### Instale as dependencias
 
 ###body-parser
 
 npm install body-parser
 
 ###cors
 
 npm install cors
 
 ###express
 
 npm install express
 
 ###mongoose
 
 npm install mongoose
 
 
 ### Para rodar a aplicação digite 
 
 npm run start
 
 ## Rotas para teste de API
 
 ##Testar o GET 
 
 Rota para visualizar os dados 
 /api/details 
 
 ##Testar o POST
 
 Rota para adicionar dados
 /api/interest
 
 exemplo para body:
 
  {
   "type": "Renda_Variavel",
   "value": 500,
   "date" : "27/07/2020"
}

 ##Testar o PUT
 
 Rota para atualalizar dados
 /api/interest/_id

 exemplo para body:
 
 {
  "value": 150
 }
 
 ##Testar o DELETE
 
 Rota para deletar dados
 /api/interest/_id
