const express = require('express');
const { validationResult } = require('express-validator');
const loginController = require('./loginController');
const { validateLogin } = require('../../middlewares/validateBody'); // Importar las validaciones
const responses = require('../../base/responses'); 

const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Listado de las rutas del modulo de autenticacion'
    });
});

// Ruta para login con validación y sanitización
router.post(
    '/login',
    validateLogin, // Usar las validaciones importadas
    (req, res, next) => {
        // Manejar errores de validación
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return responses.validationError(req, res, errors); // Usar la nueva función
        }
        next(); // Si no hay errores, pasa al controlador
    },
    loginController.loginUserByEmailOrId
);

module.exports = router;