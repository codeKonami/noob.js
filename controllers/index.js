var fs = require('fs');

//We try to load a local configuration
try {
    stats = fs.lstatSync('local-config.json');
    var configFile = require('../local-config.json');
    var publicConfig = configFile.public;
    var privateConfig = configFile.private;
} //If there is none we load the normal config json.
catch (e) {
  var configFile = require('../config.json');
  var publicConfig = configFile.public;
  var privateConfig = configFile.private;
}

exports.index = function(req, res) {
    res.render('home', {
		nav:'index',
		controller:'index',
		action:'core',
    config:publicConfig,
    })
}
exports.contact = function(req, res) {
    res.render('contact', {
		nav:'contact',
		controller:'contact',
		action:'core',
    config:publicConfig,
    })
}

exports.notfound = function(req, res) {
    res.render('404', {
		nav:'404',
		controller:'404',
		action:'core',
    config:publicConfig,
    })
}
