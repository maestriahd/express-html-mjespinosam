// Importa las librerias necesarias para tener acceso al ruteador
var express = require('express');
var router = express.Router();

// Función que se ejecuta cuando la petición es recibida por el servidor
// reacciona UNICAMENTE al método GET de HMTL
// más información al respecto de los diferentes métodos implementados en el
// protocolo HTML:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

// Cuando recibe la petición GET, ejecuta la función() con los parámetros:
// req (request/petición)
// res (response/respuesta)
router.get('/', function(req, res) {
  // ejecuta el render de la vista `index` (archivo en `views/index.hbs`)
  // entrega información a la vista para ser inyectada en el HTML
  res.render('about',
    { title: 'Savia wiki: wiki etnobotánica',
      presentacion: 'Savia wiki: propuesta para el desarrollo de una wiki etnobotánica es un proyecto que aporta a la dinamización de la base de datos de plantas medicinales del Centro de Estudios de Medicina Intercultural (CEMI) . La wiki parte de principios colaborativos de construcción de los saberes,  recopilación, organización y gestión de información/conocimiento de las  relaciones plantas medicinales-seres humanos. En este sentido la wiki busca contribuir a la constitución de la ciencia ciudadana, ciencia abierta. Todo ello en beneficio de individuos y comunidades que como el CEMI se encuentran inmersas  en la gestión del conocimiento tradicional y científico. Cinco son las estrategias a implementar para dinamizar la base de datos  1)  inclusión y reconocimiento de experiencias y conocimientos sobre plantas medicinales por parte de ciudadanos científicos y académicos   2) diseño de un sistema de curaduría de contenidos colaborativa capaz de integrar el diálogo entre los saberes tradicionales y científicos , 3 ) formación de usuarios de la wiki 4)  implementación de relaciones de datos dentro de la wiki, así como 5)  visualización de información recopilada que facilite la comprensión de conceptos científicos y conocimientos locales en públicos amplios y no necesariamente “expertos”.',
      planta: 'https://68.media.tumblr.com/6fe5e45403bf2694519cf6e8930059d3/tumblr_nkkln6BwfF1u9lu9no2_400.png'
    }
  );
});
// exprta la ruta para ser consumida por la aplicación
module.exports = router;
