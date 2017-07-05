// importar
const express = require('express');
 
// instanciar
const app = express();
 
// ruteo
app.get('/', function(req, res){
  res.sendfile('index.html');
});

// escuchar
app.listen(3000);
 
console.log("Servidor Express escuchando en modo %s", app.settings.env);