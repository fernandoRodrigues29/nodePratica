const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;//porta padrao
const mysql = require('mysql');

//configurando o body parser para pegar o POST mais tarde
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','PUT, GET, POST, PATCH, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//definir rotas
const router = express.Router();
router.get('/',(req,res) => res.json({message: 'Funcionando!' }));
app.use('/', router);

router.post('/cadCliente',(req,res)=>{
	const nome = req.body.nome;
	const cpf  = req.body.cpf;
	execSQLQuery(`INSERT INTO Clientes(Nome,CPF) VALUES('${nome}','${cpf}')`,res);
});

router.get('/clientes',(req,res)=>{
	execSQLQuery('SELECT * FROM Clientes', res);
});

router.delete('/clientes/:id', (req, res) => {
	execSQLQuery('DELETE FROM Clientes WHERE ID=' + parseInt(req.params.id), res);
});

router.post('/clientes',(req, res) => {
	const nome = req.body.nome.substring(0,150);
	const cpf  = req.body.cpf.substring(0,11);
	execSQLQuery(`INSERT INTO Clientes(Nome,CPF) VALUES('${nome}','${cpf}')`,res);
});

router.patch('/teste/:id',(req,res)=>{
	const id = parseInt(req.params.id);
	var nome = req.body.nome;
	var cpf = req.body.cpf;

	console.log(id+' - '+nome+' - '+cpf);
	execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`,res);
	
});

router.patch('/clientes/:id',(req,res) => {
	const id   =  parseInt(req.params.id);
	var nome =  req.body[0].nome;
	var cpf = req.body[0].cpf;
	//console.log(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`);
	execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`,res);
})

/**
router.patch('/clientes/:id',(req,res) => {
	const id   =  parseInt(req.params.id);
	const nome =  req.body.nome.substring(0,150);
	const cpf = req.body.cpf.substring(0,11);
	execSQLQuery(`UPDATE Clientes SET Nome='${nome}, CPF='${cpf} WHERE ID=${id}'`,res);
})
/**/
//iniciar o servidor
app.listen(port);
console.log('API funcionando!');
//funcao de conexao ao banco
function execSQLQuery(sqlQry, res){
	const connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'exemplon'
	});

	connection.query(sqlQry,function(error,results,field){
		if(error){
			res.json(error);
			console.log(error);
		}else{
			res.json(results);
		}
		connection.end();
		console.log('efetiuou ação no BD!');
	});
}
