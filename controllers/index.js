exports.index = function(req, res) {
    res.render('home', {
		nav:'index',
		controller:'index',
		action:'core',
    })
}
exports.contact = function(req, res) {
    res.render('contact', {
		nav:'contact',
		controller:'contact',
		action:'core',
    })
}

exports.notfound = function(req, res) {
    res.render('404', {
		nav:'404',
		controller:'404',
		action:'core',
    })
}
