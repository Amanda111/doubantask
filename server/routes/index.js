module.exports = function (app) {
	var bodyParser = require('body-parser');
    app.use('/', require('./page1'));
    app.use('/page2', require('./page2'));
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); 
    app.post('/page2',function(req,res){
		res.end("yes");
	});
};