var config = require('../config/config');

module.exports = {

    getIndex: function(req, res, next) {
        res.render('index.ejs', { active: 0 });
    },

    getAdoptar: function(req, res, next) {
        res.render('adoptar.ejs', { active: 1 } );
    },

    getPerdidosEncontrados: function(req, res, next) {
        res.render('perdidosyencontrados.ejs', { active: 2 } );
    },

    getPartials: function(req, res, next) {
        var name = req.params.name;
        res.render('partials/' + name);
    },

};