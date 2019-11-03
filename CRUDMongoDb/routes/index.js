var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'contact';

// Use connect method to connect to the server

const insertNguoiDung = function(data, callback) {
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");  
    const db = client.db(dbName);  
    insertBase(db, 'nguoidung' ,data, (result)=>{
      callback(result);
      client.close();
    });
  });
}
const insertBase = function(_db, _collection , _data, _callback) {
  const collection = _db.collection(_collection);
  // let data = JSON.stringify(_data);
  collection.insert(_data, function(err, result) {
    _callback(result);
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/them', function(req, res, next) {
  res.render('themdulieu', { title: 'Them moi du lieu' });
});

/* GET home page. */
router.post('/them', function(req, res, next) {
  let ten = req.body.ten;
  let dienthoai = req.body.dienthoai
  let duLieu = {
    ten, dienthoai
  };
  
  insertNguoiDung(duLieu,(result)=>{
    console.log(result);
    res.redirect('/');
  })


});

module.exports = router;
