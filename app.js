/**
 * Module dependencies.
 */

var express = require('express'),
    controllers = require('./controllers'),
    http = require('http'),
    path = require('path'),
    engine = require('ejs-locals'),
    fs = require('fs');

var app = express();
var app_name = "";
try {
    stats = fs.lstatSync('./genuine.json');
    var genuine = require('./genuine.json');
    app_name = genuine.app_name;
}
catch (e) {

}
app.engine('ejs', engine);
app.set('port', process.env["NODE_ENV_"+app_name+"_port"] || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(express.compress());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('ZsWqeEaB86vcs0qvHDq34WU3T8X7OVuU'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next){
  res.status(404);
  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }
  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  // default to plain-text. send()
  res.type('txt').send('Not found');
});

/**
 * Routes
 */

app.get('/', controllers.index);
app.get('/contact', controllers.contact);

var PORT = process.env["NODE_ENV_"+app_name+"_port"] || 3000;

http.createServer(app).listen(PORT, function() {
  console.log('Your noob.js app on port ' + PORT);
});
