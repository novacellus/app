var express = require('express');
var router = express.Router();

const db_controller = require('../../controllers/dbController');

/* GET home page. */

router.get('/', db_controller.index);
router.get('/:lemma', db_controller.lemma);
router.get('/:lemma/freq', db_controller.lemma_freq);
module.exports = router;
