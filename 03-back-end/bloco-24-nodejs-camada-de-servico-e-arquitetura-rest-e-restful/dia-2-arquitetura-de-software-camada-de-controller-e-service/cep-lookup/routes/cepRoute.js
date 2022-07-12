const express = require('express');
const router = express.Router();
const CepController = require('../controllers/cepController');
const { validateCep } = require('../middlewares');

router.get('/:cep', CepController.getCep);
router.get('/', CepController.getAll)
router.post('/', validateCep, CepController.create);

module.exports = router;