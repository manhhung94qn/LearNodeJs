var express = require('express');
var router = express.Router();
var contactModel = require('../models/contact')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/xem', function(req, res, next) {
  contactModel.find({}, function(err, result){
    console.log(result);
    res.render('xem', { title: 'Express', data: result });    
  })
});

/* GET home page. */
router.get('/sua/:id', function(req, res, next) {
  let id = req.params.id;
  contactModel.findOne({_id: id}, function(err, result){
    console.log(result);
    res.render('sua', {title:'Sua du lieu', data: result});  
  })
});
/* GET home page. */
router.post('/sua/:id', function(req, res, next) {
  let id = req.params.id;
  let ten = req.body.ten;
  let tuoi = req.body.tuoi;
  contactModel.updateOne({_id:id}, {ten,tuoi} ,function(err, result){
    console.log(result);
    res.redirect('/xem');  
  })
});

router.get('/them/', function(req, res, next) {
  res.render('them', {title:'Sua du lieu'});  
});
/* GET home page. */
router.post('/them', function(req, res, next) {

  let ten = req.body.ten;
  let tuoi = req.body.tuoi;
  contactModel.insertMany([{ten,tuoi}] ,function(err, result){
    console.log(result);
    res.redirect('/xem');  
  })
});

router.get('/xoa/:id', function(req, res, next) {
  let id = req.params.id;
  
  contactModel.findByIdAndDelete(id,function(err, result){
    console.log(result);
    res.redirect('/xem');  
  })
});
/* GET home page. */
// router.post('/sua/:id', function(req, res, next) {
//   let id = req.params.id;
//   contactModel.updateOne({_id:id}, {ten:'manh hung'} ,function(err, result){
//     console.log(result);
//     res.redirect('/xem');  
//   })
// });


module.exports = router;
