var express = require('express');
var siteCtrl = require('../controllers/site');


module.exports = function() {
    var router = express.Router();

    router.get('*', siteCtrl.getIndex);
    // router.get('/adoptar', siteCtrl.getAdoptar);
    // router.get('/perdidosyencontrados', siteCtrl.getPerdidosEncontrados);
    // router.get('/partials/:name', siteCtrl.getPartials);
    // router.post('/login', siteCtrl.login);
    // router.post('/registration', siteCtrl.registration);

    return router;
};