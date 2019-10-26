var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/post.html', function(req, res, next) {
  res.render('post', { title: 'Post' });
});

router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Post' });
});

router.get('/sanpham/:id', function(req, res, next) {
  res.send("Day la san pham thu: " + req.params.id);
});

router.get('/*.:id', function(req, res, next) {
  res.send("Cách thiết lập đường dẫn để seo với id sản phẩm là: " + req.params.id);
});

module.exports = router;
