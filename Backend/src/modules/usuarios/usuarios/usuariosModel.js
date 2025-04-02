//usuariosModel.js
const connection = require('../../../database/connection');
const { getAllUsers, getOneUser, insertUser, updateUser, deleteUser } = require('./usuariosStatements');

class UsuariosModel {

    static async getAllUsers() {
        try {
            const users = await connection.query(getAllUsers);
            return users;
        } catch (error) {
            throw new Error(error);
        }
    };

    static async getOneUser(id) {
        try {
            const user = await connection.query(getOneUser, [id]);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    };

    static async insertUser(user) {
        try {
            const{ nombre, apellido_paterno, apellido_materno, correo_electronico, fecha_de_nacimiento, nivel_id, departamento_id } = user;

            const newUser = await connection.execute(insertUser, [nombre, apellido_paterno, apellido_materno, correo_electronico, fecha_de_nacimiento, nivel_id, departamento_id]);
            return newUser;
        } catch (error) {
            throw new Error(error);
        }
    };

    static async updateUser(id, user) {
        try {
            const { nombre, apellido_paterno, apellido_materno, correo_electronico, fecha_de_nacimiento, nivel_id, departamento_id } = user;
            const updatedUser = await connection.execute(updateUser, [nombre, apellido_paterno, apellido_materno, correo_electronico, fecha_de_nacimiento, nivel_id, departamento_id, id]);
            return updatedUser;
        } catch (error) {
            throw new Error(error);
        }
    };

    static async deleteUser(id) {
        try {
            const deletedUser = await connection.execute(deleteUser, [id]);
            return deletedUser;
        } catch (error) {
            throw new Error(error);
        }
    };
};

module.exports = UsuariosModel;
