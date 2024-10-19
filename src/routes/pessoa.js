const express = require('express')
const controllerPessoa = require('../controllers/pessoa')

//Inicializando as rotas do express
const router = express.Router()

//Criando a rotas
router.get('/', controllerPessoa.GetPessoas)
router.post('/', controllerPessoa.CreatePessoa)
router.put('/:id', controllerPessoa.UpdatePessoa)
router.delete('/:id', controllerPessoa.DeletePessoa)

//Exportar as rotas
module.exports = router