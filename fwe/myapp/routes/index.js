var express = require('express');
var router = express.Router();
var model = require('./../model/task')();
/* GET home page. */
router.get('/', function(req, res, next) {
  model.find(null,function(err,task){
  	if(err){
  		throw err;
  	}
  	res.render('index', { title: 'Fernandao_e_legal' ,task: task});
  });
});
//formulario
router.post('/add',function(req,res,next){
	var body = req.body;
	body.status = false;
	
	model.create(body,function(err,task){
		if(err){
			throw err;
		}
		res.redirect('/');
	});
});
//atualiza simples
router.get('/turn/:id',function(req,res,next){
var id = req.params.id;
	model.findById(id,function(err,task){
		if(err){
			throw err;
		}	
		task.status = !task.status;
			task.save(function(){
				res.redirect('/');
			});
	});
});
//atualiza pagina separada
router.get('/editar/:id',function(req,res,next){
	var id = req.params.id;
		model.findById(id,function(err,task){
			if(err){
				throw err
			}
			res.render('editar', { title: 'Fernandao_e_legal',task: task});
		});
	
});
router.post('/atualizarPOST',function(req,res,next){
	var body = req.body;
	console.log(body);
	model.update({_id:body.id}, {title:body.title,description:body.description},function(err,task){
		if(err){throw err;}
		res.redirect('/');
	});
});
//remover
router.get('/del/:id',function(req,res,next){
	var id = req.params.id;
	model.remove({_id:id},function(err){
		if(err){
			throw err;
		}	
		res.redirect('/');
	});
});

module.exports = router;
