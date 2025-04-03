const connection = require('../../../database/connection');
const { getAllDepartamentos, getOneDepartamento, insertDepartamento, updateDepartamento, deleteDepartamento } = require('./departamentosStatements');

class DepartamentosModel {

    static async getAllDepartamentos() {
        try {
            const departamentos = await connection.query(getAllDepartamentos);
            return departamentos;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getOneDepartamento(id) {
        try {
            const departamento = await connection.query(getOneDepartamento, [id]);
            return departamento;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async insertDepartamento(departamento) {
        try {
            const { nombre, descripcion } = departamento;
            const newDepartamento = await connection.execute(insertDepartamento, [nombre, descripcion]);
            return newDepartamento;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async updateDepartamento(id, departamento) {
        try {
            const { nombre, descripcion } = departamento;
            const updatedDepartamento = await connection.execute(updateDepartamento, [nombre, descripcion, id]);
            return updatedDepartamento;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async deleteDepartamento(id) {
        try {
            const deletedDepartamento = await connection.execute(deleteDepartamento, [id]);
            return deletedDepartamento;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = DepartamentosModel