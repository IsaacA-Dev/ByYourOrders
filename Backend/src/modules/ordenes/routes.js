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
router.put('/materiales/:id', validateToken, checkRole(['Admin', 'Dev']), MaterialesController.updateMaterial);
router.delete('/materiales/:id', validateToken, checkRole(['Admin', 'Dev']), MaterialesController.deleteMaterial);

const OrdenesController = require('./ordenes/ordenesController');
// Rutas para la tabla ordenes
router.get('/ordenes', validateToken, OrdenesController.getAllOrdenes);
router.get('/ordenes/estatus/:estatus', validateToken, OrdenesController.getOrdenesByEstatus);
router.get('/ordenes/active', validateToken, OrdenesController.getAllActiveOrdenes);
router.get('/ordenes/:ordenId', validateToken, OrdenesController.getOrdenById);
router.get('/ordenes/cotizacion/:cotizacionId', validateToken, OrdenesController.getOrdenByCotizacionId);
router.get('/ordenes/modelo/:modeloId', validateToken, OrdenesController.getOrdenByModeloId);
router.post('/ordenes', validateToken, checkRole(['Admin', 'Dev']), OrdenesController.insertOrden);
router.put('/ordenes/:ordenId', validateToken, checkRole(['Admin', 'Dev']), OrdenesController.updateOrden);
router.put('/ordenes/estatus/:ordenId', validateToken, checkRole(['Admin', 'Dev']), OrdenesController.updateEstatusOrden);
router.delete('/ordenes/:ordenId', validateToken, checkRole(['Admin', 'Dev']), OrdenesController.deleteOrden);

const BomsController = require('./boms/bomsController');
// Rutas para la tabla boms
router.get('/boms', validateToken, BomsController.getAllBomsByModel);
router.get('/boms/models', validateToken, BomsController.getAllModelsWithMaterials);
router.get('/boms/:modelId', validateToken, BomsController.getBomsByModelId);
router.delete('/boms/:modelId', validateToken, checkRole(['Admin', 'Dev']), BomsController.deleteBomsByModelId);
router.put('/boms/:modelId/:materialId', validateToken, checkRole(['Admin', 'Dev']), BomsController.updateMaterialQuantity);
router.post('/boms/:modelId', validateToken, checkRole(['Admin', 'Dev']), BomsController.insertMaterialToModel);

module.exports = router;