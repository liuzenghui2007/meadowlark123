var express=require('express');
var app=express();

var fortunes=[
	"Conguer your fear or they will conquer you.",
	"Rivers need springs.",
	"Do you fear what you don't konw.",
	"You will have a pleasant suprise.",
	"Whenever possible, keep it simple.",
];

var handlebars=require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 30000);

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.render('home');
});

app.get('/about',function(req,res){
	var randomFortune=fortunes[Math.floor(Math.random()*fortunes.length)];
	res.render('about',{fortune:randomFortune});
});

//定制404页面
app.use(function(req,res,next){
	res.status(404);
	res.render('404');
});

//定制500页面
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'),function(){
	console.log('Express started on aliyun:' + app.get('port') +'; press Ctrl - C to terminate.');
});
