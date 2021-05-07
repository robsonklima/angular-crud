//Importa as dependências que acabamos de instalar
const express = require("express");
const path = require("path");

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + "/dist/angular-crud"));

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);