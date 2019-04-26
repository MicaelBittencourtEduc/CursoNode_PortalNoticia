//Aqui está criado um módulo e está espotando a variável app
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-Parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({externded: true}));

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);
module.exports = app;

