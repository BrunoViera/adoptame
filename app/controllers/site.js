var config = require('../config/config');

module.exports = {

    getIndex: function(req, res, next) {
        res.render('index.ejs');
    },

    getPartials: function(req, res, next) {
        var name = req.params.name;
        res.render('partials/' + name);
    },

};