const express = require('express');
const router = express.Router();

const response = require('../base/responses');

const usuariosRoutes = require('./usuarios/routes');
const autenticacionRoutes = require('./autenticacion/routes');
const ordenesRoutes = require('./ordenes/routes');
const validateToken = require('../middlewares/validateToken');

router.get('/', (req, res) => {
    response.success(req, res, 'Listado de los modulos');
})

router.use('/modulousuarios', validateToken, usuariosRoutes);
router.use('/moduloautenticacion', autenticacionRoutes);
router.use('/moduloordenes', validateToken, ordenesRoutes);



module.exports = router;