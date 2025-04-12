const express = require('express');
const router = express.Router();
const validateToken = require('../../middlewares/validateToken');
const checkRole = require('../../middlewares/checkRole');
const response = require('../../base/responses');

// Ruta base para el módulo de órdenes
router.get('/', (req, res) => {
    response.success(req, res, 'Listado de las rutas del módulo de órdenes');
});


// Importar controladores
const MaterialesController = require('./materiales/materialesController');
// Rutas para la tabla materiales
router.get('/materiales', validateToken, MaterialesController.getAllMateriales);
router.get('/materiales/:id', validateToken, MaterialesController.getMaterialById);
router.get('/materiales/name/:name', validateToken, MaterialesController.getMaterialByName);
router.post('/materiales', validateToken, checkRole(['Admin', 'Dev']), MaterialesController.insertMaterial);
router.put('/materiales', validateToken, checkRole(['Admin', 'Dev']), MaterialesController.updateMaterial);
router.delete('/materiales/:id', validateToken, checkRole(['Admin', 'Dev']), MaterialesController.deleteMaterial);

module.exports = router;