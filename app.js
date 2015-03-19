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

/**
 * Routes
 */

app.get('/', controllers.index);
app.get('/contact', controllers.contact);
// Must always remain the last route
//app.get('*', controllers.notfound);

var PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, function() {
  console.log('Your noob.js app on port ' + PORT);
});
