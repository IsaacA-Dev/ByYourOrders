const connection = require('../../../database/connection');
const MaterialesStatements = require('./materialesStatements');

class MaterialesModel {

    static async getAllMateriales() {
        try {
            const [rows] = await connection.query(MaterialesStatements.getAllMateriales);
            return rows;
        } catch (error) {
            console.error('Error in getAllMateriales:', error);
            throw error;
        }
    }

    static async getMaterialById(id) {
        try {
            const [rows] = await connection.query(MaterialesStatements.getMaterialById, [id]);
            return rows[0];
        } catch (error) {
            console.error('Error in getMaterialById:', error);
            throw error;
        }
    }

    static async getMaterialByName(name) {
        try {
            const [rows] = await connection.query(MaterialesStatements.getMaterialByName, [name]);
            return rows[0];
        } catch (error) {
            console.error('Error in getMaterialByName:', error);
            throw error;
        }
    }

    static async insertMaterial(material) {
        try {
            const [result] = await connection.query(MaterialesStatements.insertMaterial, material);
            return result;
        } catch (error) {
            console.error('Error in insertMaterial:', error);
            throw error;
        }
    }

    static async updateMaterial(material) {
        try {
            const [result] = await connection.query(MaterialesStatements.updateMaterial, material);
            return result;
        } catch (error) {
            console.error('Error in updateMaterial:', error);
            throw error;
        }
    }

    static async deleteMaterial(id) {
        try {
            const [result] = await connection.query(MaterialesStatements.deleteMaterial, [id]);
            return result;
        } catch (error) {
            console.error('Error in deleteMaterial:', error);
            throw error;
        }
    }

};

module.exports = MaterialesModel;