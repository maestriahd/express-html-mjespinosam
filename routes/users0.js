var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  // A diferencia de las otras dos rutas en esta aplicación
  // acá no se ejecuta el método render de la respuesta
  // por lo tanto la respuesta que se envía al cliente no incluye todo
  // el documento HTML espcificado en la vista.
  res.send('respond with a resource');
});

module.exports = router;
