var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('objetivo',
    { title: '¿Para qué?',
    saludo: 'Ofrecer a comunidades locales y científicas (con interés en el conocimiento etnobotánico) estrategias de  gestión  del conocimiento tradicional y científico a partir de un aplicativo WIKI que integre  un protocolo curatorial  para el manejo colaborativo de la información entre públicos expertos y ciudadanos científicos suficiente para verificar y validar la información así como herramientas para el acceso a la información que faciliten su apropiación. ',
    imagen1: 'imagenes/proceso.jpg'
  }
  );
});

module.exports = router;
