var express = require('express');
var router = express.Router();

const lexica_controller = require('../../controllers/lexicaController');

/* GET home page. */

router.get('/', lexica_controller.index);
router.get('/:lexicon', lexica_controller.dispatch);
router.get('/:lexicon/:lemma', lexica_controller.lemma);
module.exports = router;
