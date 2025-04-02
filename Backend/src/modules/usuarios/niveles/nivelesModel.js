const connection = require('../../../database/connection');
const { getAllNiveles, getOneNivel, insertNivel, updateNivel } = require('./nivelesStatements');

class NivelesModel {

    static async getAllNiveles() {
        try {
            const niveles = await connection.query(getAllNiveles);
            return niveles;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getOneNivel(id) {
        try {
            const nivel = await connection.query(getOneNivel, [id]);
            return nivel;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async insertNivel(nivel) {
        try {
            const { nombre, descripcion } = nivel;
            const newNivel = await connection.execute(insertNivel, [nombre, descripcion]);
            return newNivel;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async updateNivel(id, nivel) {
        try {
            const { nombre, descripcion } = nivel;
            const updatedNivel = await connection.execute(updateNivel, [nombre, descripcion, id]);
            return updatedNivel;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async deleteNivel(id) {
        try {
            const deletedNivel = await connection.execute(deleteNivel, [id]);
            return deletedNivel;
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = NivelesModel;