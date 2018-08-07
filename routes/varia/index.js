var express = require('express');
var router = express.Router();

const varia_controller = require('../../controllers/variaController');

/* GET home page. */

router.get('/', varia_controller.index);
router.get('/:resource', varia_controller.dispatch);
router.get('/:resource/:lemma', varia_controller.lemma);
module.exports = router;
