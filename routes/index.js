var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "IFTTTish", lang: "eng" });
});

router.get('/jp', function(req, res, next) {
  res.render('index', { title: "IFTTTish", lang: 'jp' });
});


module.exports = router;
