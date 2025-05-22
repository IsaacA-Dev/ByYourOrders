const MaterialesModel = require('./materialesModel');
const response = require('../../../base/responses');

class MaterialesController {
    static async getAllMateriales(req, res) {
        try {
            const materiales = await MaterialesModel.getAllMateriales();
            response.success(req, res, materiales, 200);
        } catch (error) {
            response.error(req, res, 'Error al consultar los materiales', 500, error);
        }
    }

    static async getMaterialById(req, res) {
        try {
            const { id } = req.params;
            const material = await MaterialesModel.getMaterialById(id);
            if (!material) {
                response.error(req, res, 'Material no encontrado', 404);
                return;
            }
            response.success(req, res, material, 200);
        } catch (error) {
            response.error(req, res, 'Error al consultar el material', 500, error);
        }
    }

    static async getMaterialByName(req, res) {
        try {
            const { name } = req.params;
            const material = await MaterialesModel.getMaterialByName(name);
            if (!material) {
                response.error(req, res, 'Material no encontrado', 404);
                return;
            }
            response.success(req, res, material, 200);
        } catch (error) {
            response.error(req, res, 'Error al consultar el material', 500, error);
        }
    }

    static async insertMaterial(req, res) {
        try {
            const material = req.body;
            const result = await MaterialesModel.insertMaterial(material);
            if (!result || !result.insertId) {
                response.error(req, res, 'Error al crear el material', 422);
                return;
            }
            if (result.affectedRows === 0) {
                response.error(req, res, 'No se realizo ningun cambio', 422);
                return;
            }
            response.success(req, res, { id: result.insertId, ...material }, 201);
        } catch (error) {
            response.error(req, res, 'Error al insertar el material', 500, error);
        }
    }

    static async updateMaterial(req, res) {
        try {
            const id = req.params.id;
            const material = await MaterialesModel.updateMaterial(id, req.body);

            if (!material) {
                response.error(req, res, 'Material No Encontrado', 404);
                return;
            }
            if (material.affectedRows === 0) {
                response.error(req, res, 'No se realizo ningun cambio', 422);
                return;
            }
            response.success(req, res, { id, ...req.body }, 200);            
        } catch (error) {
            response.error(req, res, 'Error al actualizar el material', 500, error);
        }
    }

    static async deleteMaterial(req, res) {
        try {
            const { id } = req.params;
            const result = await MaterialesModel.deleteMaterial(id);
            if (result.affectedRows === 0) {
                response.error(req, res, 'Material No Encontrado', 404);
                return;
            }
            response.success(req, res, 'Material eliminado correctamente', 200);
        } catch (error) {
            response.error(req, res, 'Error al eliminar el material', 500, error);
        }
    }
}

module.exports = MaterialesController;