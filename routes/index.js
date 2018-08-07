var express = require('express');
var router = express.Router();

//Testing
router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});


router.use('/corpora',require( './corpora'))
router.use('/varia',require( './varia'))
router.use('/lexica',require( './lexica'))
router.use('/db',require( './db'))

/* GET home page. */
router.get('/', function(req,res) {
  res.send('/');
});

module.exports = router;
