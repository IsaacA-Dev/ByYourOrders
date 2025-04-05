const express = require('express');
const router = express.Router();


// Rutas para el login
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Listado de las rutas del modulo de autenticacion'
    });
});

const loginController = require('./loginController');
router.get('/login', loginController.loginUserByEmailOrId);


module.exports = router;