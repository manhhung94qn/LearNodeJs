var express = require('express');
var router = express.Router();
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './anhsanpham')
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.originalname)
  }
})
 
var upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/uploadfile', upload.any() ,function(req, res, next) {
  res.status(200).send(req.files);
});

module.exports = router;
