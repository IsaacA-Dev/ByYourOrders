const connection = require('../../../database/connection');
const MaterialesStatements = require('./materialesStatements');

class MaterialesModel {
    static async getAllMateriales() {
        try {
            const materiales = await connection.query(MaterialesStatements.getAllMateriales);
            return materiales; // Devuelve directamente las filas
        } catch (error) {
            throw error;
        }
    }

    static async getMaterialById(id) {
        try {
            const materiales = await connection.query(MaterialesStatements.getMaterialById, [id]);
            return materiales[0]; 
        } catch (error) {
            throw error;
        }
    }

    static async getMaterialByName(name) {
        try {
            const materiales = await connection.query(MaterialesStatements.getMaterialByName, [name]);
            return materiales[0]; 
        } catch (error) {
            throw error;
        }
    }

    static async insertMaterial(material) {
        try {
            const { nombre, unidad, costo } = material;
            const newMaterial = await connection.execute(MaterialesStatements.insertMaterial, [nombre, unidad, costo]);
            return newMaterial; 
        } catch (error) {
            throw error;
        }
    }

    static async updateMaterial(id, material) {
        try {
            const { nombre, unidad, costo } = material;
            const result = await connection.execute(MaterialesStatements.updateMaterial, [nombre, unidad, costo, id]);
            return result; 
        } catch (error) {
            throw error;
        }
    }

    static async deleteMaterial(id) {
        try {
            const result = await connection.execute(MaterialesStatements.deleteMaterial, [id]);
            return result.affectedRows; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MaterialesModel;