const express = require('express');
const router = express.Router();
const validateToken = require('../../middlewares/validateToken');
const checkRole = require('../../middlewares/checkRole');


router.get('/', (req, res) => {
    response.success(req, res, 'Listado de las rutas del modulo de usuarios');
})

//rutas de contrasenas 
const contrasenasController = require('./contrasenas/contrasenasController');
router.put('/contrasenas/:id', validateToken, contrasenasController.updateContrasena);

//rutas de usuarios
const usuariosController = require('./usuarios/usuariosController');
router.get('/usuarios', validateToken, checkRole(['Dev']), usuariosController.getAllUsers);
router.get('/usuarios/:id', validateToken, usuariosController.getOneUser);
router.post('/usuarios', validateToken, usuariosController.insertUser);
router.put('/usuarios/:id', validateToken, usuariosController.updateUser);
router.delete('/usuarios/:id', validateToken, usuariosController.deleteUser);

//rutas de niveles
const nivelesController = require('./niveles/nivelesController');
router.get('/niveles', validateToken, nivelesController.getAllNiveles);
router.get('/niveles/:id', validateToken, nivelesController.getOneNivel);
router.post('/niveles', validateToken, nivelesController.insertNivel);
router.put('/niveles/:id', validateToken, nivelesController.updateNivel);
router.delete('/niveles/:id', validateToken, nivelesController.deleteNivel);

//rutas de Departamentos
const departamentosController = require('./departamentos/departamentosController');
router.get('/departamentos', validateToken, departamentosController.getAllDepartamentos);
router.get('/departamentos/:id', validateToken, departamentosController.getOneDepartamento);
router.post('/departamentos', validateToken, departamentosController.insertDepartamento);
router.put('/departamentos/:id', validateToken, departamentosController.updateDepartamento);
router.delete('/departamentos/:id', validateToken, departamentosController.deleteDepartamento);


module.exports = router;