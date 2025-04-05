const ContrasenasModel = require('./contrasenasModel');
const responses = require('../../../base/responses');

const updateContrasena = async (req, res) => {
    try {
        const { contrasena, confirm_contrasena } = req.body;
        const usuario_id = req.params.id;

        if (!req.body || Object.keys(req.body).length === 0) {
            return responses.fail(req, res, "Datos de contraseña requeridos", 400);
        }

        if (!contrasena || !confirm_contrasena) {
            return responses.fail(req, res, "Ambas contraseñas son requeridas", 400);
        }

        if (contrasena !== confirm_contrasena) {
            return responses.fail(req, res, "Las contraseñas no coinciden", 400);
        }

        const result = await ContrasenasModel.updateContrasena(usuario_id, { contrasena, confirm_contrasena });

        if (!result || !result.usuario_id) {
            return responses.fail(req, res, "Error al actualizar contraseña", 422);
        }

        responses.success(req, res, { id: result.usuario_id, msg: "Contrasena actualizada correctamente"}, 200);
    } catch (error) {
        responses.error(req, res, error.message, 500);
    }
};

module.exports = { 
    updateContrasena
};
