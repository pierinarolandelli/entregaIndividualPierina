const express = require("express");
const router = express.Router();

const indexController = require('../controller/indexController');

router.get('/', indexController.home);
router.post('/crear', indexController.create);
router.get('/actualizar/:id', indexController.refresh);
router.put('/actualizar/:id', indexController.change);
router.delete('/eliminar/:id', indexController.delete);


module.exports = router;
