const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'exemplon'
});

function createTable(conn){
	const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
				"ID int NOT NULL AUTO_INCREMENT, \n"+
				"Nome varchar(150) NOT NULL, \n"+
				"CPF char(11) NOT NULL,\n"+
				"PRIMARY KEY (ID)\n);";
	conn.query(sql,function(error, results, field){
		if(error) return console.log(error);
		console.log('criou a tabela');
	});				
}

function addRows(conn){
	const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
	const values = [
		['teste1','12345678901'],
		['teste1','38345698901'],
		['teste1','04345818901']
	];
	conn.query(sql,[values], function(error, results, field){
		if(error) return console.log(error);
		console.log('adicionau registros');
		conn.end();//fechar a conexão
	});
}

function editRow(conn){
	const sql = "UPDATE Clientes SET Nome = 'adebardo' WHERE ID = 3 ";
	conn.query(sql,function(error, results, field){
		if(error) return console.log(error);
		console.log(results.affectedRows+'record(s) updated');
		conn.end();
	}); 
}

function deleteRow(conn){
	const sql = "DELETE FROM Clientes WHERE ID = 3 ";
	conn.query(sql,function(error, results, field){
		if(error) return console.log(error);
		console.log(results.affectedRows+'record(s) updated');
		conn.end();
	}); 
}
connection.connect(function(err){
	if(err) return console.log(err);
	console.log('Conectou meu Rei!');
	createTable(connection);
	//addRows(connection);
	//editRow(connection);
	deleteRow(connection);
})