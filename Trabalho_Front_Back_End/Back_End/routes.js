const express = require('express');
const cadastroController = require('./controllers/CadastroController');
const router = express.Router();

router.post('/cadastros', cadastroController.createCadastroCpf);
router.post('/cadastros/cpf/:cpf', cadastroController.createCadastro);
router.get('/cadastros', cadastroController.getAllCadastros);
router.get('/cadastros', cadastroController.getCadastroById);
router.put('/cadastros', cadastroController.updateCadastro);
router.delete('/cadastros', cadastroController.deleteCadastro);

module.exports = router;