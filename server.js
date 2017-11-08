var express = require('express');
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:'codingdojo!'}));
app.use(express.static(path.join(__dirname,'./static')));
app.set('views',path.join(__dirname,"./views"));
app.set('view engine','ejs');

app.get('/',function(req,res){
	res.render("form");
})

app.get('/result',function(req,res){
	res.render("result",{user:req.session.user});
})

app.post('/',function(req,res){
	req.session.user = req.body;
	console.log(req.session.user);
	res.redirect('/result');
})

app.listen(8000,function(){
	console.log('listening on port 8000');
});