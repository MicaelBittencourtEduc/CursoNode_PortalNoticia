var mysql = require('mysql');

var mysql = require('mysql');

var connMySQL = function(){
	console.log('Conexão banco estabelecidas');
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '142536',
		database : 'portal_noticias'
	});
}

module.exports = function(){
	console.log('autoload carregado');
	return connMySQL;
}
