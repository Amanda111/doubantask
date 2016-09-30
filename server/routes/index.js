module.exports = function (app) {
    var hbs = require('hbs');
	var request = require('superagent');
	var jsonp = require('superagent-jsonp');
    // app.use('/', require('./page1'));
    // app.use('/page2', require('./page2'));
    
    // 指定模板文件的后缀名为html
    app.set('view engine', 'html');

    // 运行hbs模块
    app.engine('html', hbs.__express);

    app.get('/', function(req, res) {
    	res.render('page1');
	});
    app.get('/:id', function(req, res) {
    	var arg = req.params.id;
        var url = 'https://api.douban.com/v2/book/' + arg;
        request
            .get(url)
            .use(jsonp)
            .end(function(err, resp){
                if(err){
                    console.log('Something error!')
                }
                res.render('../views/page2/index',{book: resp.body.title});
            })
	});
};