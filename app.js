var app = require('./config/server');//Feito a requisição do módulo server e importando a variável app

app.listen(3000, function(){
	console.log("Servidor ON - Com Express")

});