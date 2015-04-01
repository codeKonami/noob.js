/**
 * Module dependencies.
 */

var express = require('express'),
    controllers = require('./controllers'),
    http = require('http'),
    path = require('path'),
    engine = require('ejs-locals');

var app = express();

app.engine('ejs', engine);
app.set('port', process.env.PORT || 3000);
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

var PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, function() {
  console.log('Your noob.js app on port ' + PORT);
});
