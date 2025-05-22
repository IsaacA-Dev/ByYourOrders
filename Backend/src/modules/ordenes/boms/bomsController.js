const BomsModel = require('./bomsModel');
const response = require('../../../base/responses');

class BomsController {
    static async getAllBomsByModel(req, res) {
        try {
            const boms = await BomsModel.getAllBomsByModel();
            response.success(req, res, boms, 200);
        } catch (error) {
            response.error(req, res, 'Error al consultar las listas de materiales', 500, error);
        }
    }
    static async getAllModelsWithMaterials(req, res) {
        try {
            const boms = await BomsModel.getAllModelsWithMaterials();
            response.success(req, res, boms, 200);
        } catch (error) {
            response.error(req, res, 'Error al consultar las listas de materiales', 500, error);
        }
    }
    static async getBomsByModelId(req, res) {
        try {
            const { modelId } = req.params;
            const boms = await BomsModel.getBomsByModelId(modelId);
            if (!boms || boms.length === 0) {
                response.error(req, res, 'Lista de materiales no encontrada', 404);
                return;
            }
            response.success(req, res, boms, 200);
        } catch (error) {
            response.error(req, res, 'Error al consultar la lista de materiales', 500, error);
        }
    }
    static async deleteBomsByModelId(req, res) {
        try {
            const { modelId } = req.params;
            const result = await BomsModel.deleteBomsByModelId(modelId);
            if (result === 0) {
                response.error(req, res, 'Lista de materiales no encontrada', 404);
                return;
            }
            response.success(req, res, { message: 'Lista de materiales eliminada correctamente' }, 200);
        } catch (error) {
            response.error(req, res, 'Error al eliminar la lista de materiales', 500, error);
        }
    }
    static async updateMaterialQuantity(req, res) {
        try {
            const { modelId, materialId } = req.params;
            const { quantity } = req.body;
            const result = await BomsModel.updateMaterialQuantity(modelId, materialId, quantity);
            if (result === 0) {
                response.error(req, res, 'Lista de materiales no encontrada', 404);
                return;
            }
            response.success(req, res, { message: 'Cantidad de material actualizada correctamente' }, 200);
        } catch (error) {
            response.error(req, res, 'Error al actualizar la cantidad de material', 500, error);
        }
    }
    static async insertMaterialToModel(req, res) {
        try {
            const { modelId, materialId } = req.params;
            const { quantity } = req.body;
            const result = await BomsModel.insertMaterialToModel(modelId, materialId, quantity);
            if (result.affectedRows === 0) {
                response.error(req, res, 'Error al insertar el material en la lista', 422);
                return;
            }
            response.success(req, res, { message: 'Material insertado correctamente' }, 201);
        } catch (error) {
            response.error(req, res, 'Error al insertar el material en la lista', 500, error);
        }
    }
}
module.exports = BomsController;