require("./index.scss");
// require("../common/common.js");

var request = require('superagent');
var jsonp = require('superagent-jsonp');

var book = document.getElementById('book'),
	btn = document.getElementById('btn');

console.log(window.location.pathname)

var url = 'https://api.douban.com/v2/book' + window.location.pathname
request
	.get(url)
	.use(jsonp)
	.end(function(err,res){
		if (err) throw err
		console.log(res.body)
	})

// btn.addEventListener("click",function(){
// 	console.log(window.location)
	// request
	// 	.get(url)
	// 	.end(function(err,res){
	// 		if (err) throw err
	// 		console.log(res.body)
	// 	})
	// var text = book.value;
	// if (text) {
	// 	var url = 'https://api.douban.com/v2/book/search?q=' + text;
	// 	request
	// 		.get(url)
	// 		.use(jsonp)
	// 		.end(function(err,res){
	// 			if (err) throw err;
	// 			var book_info = res.body;
	// 			var m = 0;
	// 			for(var i = 0;i < book_info.books.length; i++){
	// 				if (book_info.books[m].rating.average < book_info.books[i].rating.average) {
	// 					m = i;
	// 				}
	// 			}
	// 			var bookurl = book_info.books[m].url;
	// 			request
	// 				.get(bookurl)
	// 				.use(jsonp)
	// 				.end(function(err,res){
	// 					if (err) throw err;
	// 					var content = document.getElementById('content');
	// 					content.innerHTML = res.body.summary;
	// 				})
	// 		})
	// 	}
	// })
