const MaterialesModel = require('./materialesModel');
const response = require('../../../base/responses');

class MaterialesController {
    static async getAllMateriales(req, res) {
        try {
            const materiales = await MaterialesModel.getAllMateriales();
            response.success(req, res, materiales, 200);
        } catch (error) {
            console.error('Error in getAllMateriales:', error);
            response.error(req, res, 'Error retrieving materials', 500, error);
        }
    }

    static async getMaterialById(req, res) {
        try {
            const { id } = req.params;
            const material = await MaterialesModel.getMaterialById(id);
            if (!material) {
                response.error(req, res, 'Material not found', 404);
                return;
            }
            response.success(req, res, material, 200);
        } catch (error) {
            console.error('Error in getMaterialById:', error);
            response.error(req, res, 'Error retrieving material', 500, error);
        }
    }

    static async getMaterialByName(req, res) {
        try {
            const { name } = req.params;
            const material = await MaterialesModel.getMaterialByName(name);
            if (!material) {
                response.error(req, res, 'Material not found', 404);
                return;
            }
            response.success(req, res, material, 200);
        } catch (error) {
            console.error('Error in getMaterialByName:', error);
            response.error(req, res, 'Error retrieving material', 500, error);
        }
    }

    static async insertMaterial(req, res) {
        try {
            const material = req.body;
            const result = await MaterialesModel.insertMaterial(material);
            response.success(req, res, { id: result.insertId }, 201);
        } catch (error) {
            console.error('Error in insertMaterial:', error);
            response.error(req, res, 'Error inserting material', 500, error);
        }
    }

    static async updateMaterial(req, res) {
        try {
            const material = req.body;
            const result = await MaterialesModel.updateMaterial(material);
            if (result.affectedRows === 0) {
                response.error(req, res, 'Material not found', 404);
                return;
            }
            response.success(req, res, 'Material updated successfully', 200);
        } catch (error) {
            console.error('Error in updateMaterial:', error);
            response.error(req, res, 'Error updating material', 500, error);
        }
    }

    static async deleteMaterial(req, res) {
        try {
            const { id } = req.params;
            const result = await MaterialesModel.deleteMaterial(id);
            if (result.affectedRows === 0) {
                response.error(req, res, 'Material not found', 404);
                return;
            }
            response.success(req, res, 'Material deleted successfully', 200);
        } catch (error) {
            console.error('Error in deleteMaterial:', error);
            response.error(req, res, 'Error deleting material', 500, error);
        }
    }
}

module.exports = MaterialesController;