var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET deltail page. */
router.get('/chitiet.html', function(req, res, next) {
  res.render('chit-tiet-san-pham', { title: 'Express' });
});

module.exports = router;
