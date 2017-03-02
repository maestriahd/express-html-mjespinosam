var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('planta',
    { title: 'Malezas',
    saludo: 'Malezas Medicinales',
    texto:'Una vez las manos removieron la tierra para sembrar, aparecieron aquellas plantas silvestres y espontáneas que nombramos malezas. Crecen con prodigio en los bordes de las calles y entre las grietas, recubren caminos de monte y pastan las vacas sus sabores, más amargos que dulces, en los potreros. Se encuentran en boticas y herbolarias recetadas sin exceso para los padecimientos y se procuran de a poquitos en aguas, tintes y emplastos:  Diente de león, Lengua de vaca, Malva, Llantén, Ortiga y Bolsita de pastor, son siete de las miles de malezas que brotan en el mundo',
    numero: 1,
    planta: 'https://68.media.tumblr.com/34122a8983a42585629055f248972a5d/tumblr_o814j3xNgi1u9ew7eo2_1280.jpg'
  }
  );
});

module.exports = router;
