const connection = require('../../../database/connection');
const BomsStatements = require('./bomsStatements');

class BomsModel {

    static async getAllBomsByModel() {

        try {
            const boms = await connection.query(BomsStatements.getAllBomsByModel);
            return boms; // Devuelve directamente las filas
        } catch (error) {
            throw error;
        }
    }

    static async getAllModelsWithMaterials() {
        try {
            const boms = await connection.query(BomsStatements.getAllModelsWithMaterials);
            return boms; // Devuelve directamente las filas
        } catch (error) {
            throw error;
        }
    }
    static async getBomsByModelId(modelId) {
        try {
            const boms = await connection.query(BomsStatements.getBomsByModelId, [modelId]);
            return boms; // Devuelve directamente las filas
        } catch (error) {
            throw error;
        }
    }
    static async deleteBomsByModelId(modelId) {
        try {
            const result = await connection.execute(BomsStatements.deleteBomsByModelId, [modelId]);
            return result.affectedRows; // Devuelve el número de filas afectadas
        } catch (error) {
            throw error;
        }
    }
    static async updateMaterialQuantity(modelId, materialId, quantity) {
        try {
            const result = await connection.execute(BomsStatements.updateMaterialQuantity, [quantity, modelId, materialId]);
            return result.affectedRows; // Devuelve el número de filas afectadas
        } catch (error) {
            throw error;
        }
    }
    static async insertMaterialToModel(modelId, materialId, quantity) {
        try {
            const result = await connection.execute(BomsStatements.insertMaterialToModel, [modelId, materialId, quantity]);
            return result; // Devuelve el resultado de la inserción
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BomsModel;