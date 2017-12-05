var bodyParser = require('body-parser');
var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

// app.get('/', function (req, res) {
// 	res.send('Hello World');
// })

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);


app.listen(PORT, function(){
	console.log("app listening on PORT:" + PORT);

});