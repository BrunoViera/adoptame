var express = require('express');
var siteCtrl = require('../controllers/site');


module.exports = function() {
    var router = express.Router();

    router.get('/', siteCtrl.getIndex);
    router.get('/adoptar', siteCtrl.getAdoptar);
    router.get('/perdidos_encontrados', siteCtrl.getPerdidosEncontrados);
    router.get('/login', siteCtrl.getLogin);
    router.get('/mis_animales', siteCtrl.getMisAnimales);
    // router.get('/partials/:name', siteCtrl.getPartials);
    // router.post('/login', siteCtrl.login);
    // router.post('/registration', siteCtrl.registration);

    return router;
};