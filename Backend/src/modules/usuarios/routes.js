const express = require('express');
const router = express.Router();

const response = require('../../base/responses');

router.get('/', (req, res) => {
    response.success(req, res, 'Listado de las rutas del modulo de usuarios');
})

//rutas de usuarios
const usuariosController = require('./usuarios/usuariosController');
router.get('/usuarios', usuariosController.getAllUsers);
router.get('/usuarios/:id', usuariosController.getOneUser);
router.post('/usuarios', usuariosController.insertUser);
router.put('/usuarios/:id', usuariosController.updateUser);
router.delete('/usuarios/:id', usuariosController.deleteUser);

//rutas de niveles
const nivelesController = require('./niveles/nivelesController');
router.get('/niveles', nivelesController.getAllNiveles);
router.get('/niveles/:id', nivelesController.getOneNivel);
router.post('/niveles', nivelesController.insertNivel);
router.put('/niveles/:id', nivelesController.updateNivel);
router.delete('/niveles/:id', nivelesController.deleteNivel);


module.exports = router;