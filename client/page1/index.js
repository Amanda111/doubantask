require("./index.scss");
// require("../common/common.js");

var request = require('superagent');
var jsonp = require('superagent-jsonp');

var search  = document.getElementById('searchbook');
var content = document.getElementById('content');
search.addEventListener("keyup"||"keydown",function(){
	var text = search.value;
	if (text) {
	var url = 'https://api.douban.com/v2/book/search?q=' + text;
	request
		.get(url)
		.use(jsonp)
		.end(function(err,res){
			if (err) throw err;
			content.innerHTML = ""
			var book_info = res.body;
			for(var i = 0; i < 10; i++){
				console.log(book_info.books[i].url)
				console.log(i)
				var div = document.createElement("div");
				div.innerHTML = "<a href='./"+ book_info.books[i].id + "'>" + book_info.books[i].title + "</a>";
				div.className = "booklist";
				content.appendChild(div);
			}
			var box = document.getElementsByClassName('booklist');
			// for(var i = 0;i < 10;i++){
			// 	(function(){
			// 		var item = i;
			// 		box[item].addEventListener("click",function(){
			// 			openpage(item);
			// 			console.log('lala')
			// 		})
			// 	})(i)
			// }
			// function openpage(n){
			// 	request
			// 		.post('/page2')
			// 		.send(book_info.books[n].url)
			// 		.end(function(err,res){
			// 			if (err) throw err;
			// 			console.log('haha')
			// 		})
			// }
		})

	}
})

// Uncomment these to enable hot module reload for this entry.
// if (module.hot) {
//   module.hot.accept();
// }
