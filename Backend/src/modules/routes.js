const express = require('express');
const router = express.Router();

const response = require('../base/responses');

const usuariosRoutes = require('./usuarios/routes');
const autenticacionRoutes = require('./autenticacion/routes');
const ordenesRoutes = require('./ordenes/routes');

router.get('/', (req, res) => {
    response.success(req, res, 'Listado de los modulos');
})

router.use('/modulousuarios', usuariosRoutes);
router.use('/moduloautenticacion', autenticacionRoutes);
router.use('/moduloordenes', ordenesRoutes);



module.exports = router;