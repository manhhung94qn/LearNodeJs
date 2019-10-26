var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/suadaunanh/:sdt', function(req, res, next) {
  res.cookie('sdt', req.params.sdt);
  res.send("Số điện thoại là: " + req.params.sdt)
});

/* GET home page. */
router.get('/banhran', function(req, res, next) {
  res.send("Số điện thoại là: " + req.cookies.sdt)
});
/* GET home page. */
router.get('/xoa', function(req, res, next) {
  if(req.cookies.sdt){
    res.clearCookie('sdt');
  }
  res.send("Đã xóa cookie " )
});

module.exports = router;
