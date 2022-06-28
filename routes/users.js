var express = require('express');
const controlle = require('../controllers/control');
var router = express.Router();


/* GET users listing. */
router.post('/', controlle.insertionGet);
router.get('/', controlle.affiche)
router.put('/:id', controlle.modifier)
router.delete('/:id', controlle.supprime)

module.exports = router;
