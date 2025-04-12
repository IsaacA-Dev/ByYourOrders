const { body } = require('express-validator');

const validateLogin = [
    // Validar y sanitizar el campo idoremail
    body('idoremail')
        .notEmpty().withMessage('El campo es obligatorio.')
        .trim()
        .escape(),
    // Validar y sanitizar el campo password
    body('password')
        .notEmpty().withMessage('El campo password es obligatorio.')
        .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres.')
        .trim()
        .escape()
];

module.exports = {
    validateLogin
};