module.exports = function (app) {
	var request = require('superagent');
	var jsonp = require('superagent-jsonp');
    // app.use('/', require('./page1'));
    // app.use('/page2', require('./page2'));
    app.get('/', function(req, res) {
    	res.render('page1');
	});
    app.get('/:id', function(req, res) {
    	res.render('page2');
	});
};