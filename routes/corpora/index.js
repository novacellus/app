// /corpora routes

var express = require('express');
var router = express.Router();

const corporaCtrl = require('../../controllers/corporaController');

/* GET home page. */

router.get('/', corporaCtrl.index);
router.get('/:corpus', corporaCtrl.searchCorpus);
router.get('/:corpus/:lemma', corporaCtrl.searchTerm);
router.get('/:corpus/:lemma/:type', corporaCtrl.searchTermInfo);
module.exports = router;
