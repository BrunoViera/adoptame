var express     = require('express');
var app         = express();
var port        = process.env.PORT || 3000;
var morgan      = require('morgan');
// var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var expressJWT  = require('express-jwt');
var config      = require('./app/config/config');
var apiRoutes   = require('./app/config/routes.js');

// configuration ==
// mongoose.connect(config.url);

// app set ==
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
// app.set('superSecret', config.secret);

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

// security ==
// app.use(expressJWT({
//     secret: app.get('superSecret')
// }).unless({
//     path: ['/','/favicon.ico', '/partials/login.ejs', '/partials/register.ejs', '', '/login', '/registration']
// }));

// routes ==
app.use(apiRoutes());

// launch ==
app.listen(port, function() {
    console.log('Example app listening on port 3000!');
});
