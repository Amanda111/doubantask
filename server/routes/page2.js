var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.render('page2');
});

router.post('/page2',function(req,res){
	console.log(req.body)
})
// router.post('/',function(req,res,next){
// var book = req.body;
//     if(book){
//     	console.log(book)
//     }
// });

module.exports = router;