const connection = require('../../../database/connection');
const { getAllUsers, getOneUser, insertUser, updateUser, deleteUser } = require('./usuariosStatements');
const ContrasenasModel = require('../contrasenas/contrasenasModel');

class UsuariosModel {
    static async getAllUsers() {
        try {
            const users = await connection.query(getAllUsers);
            return users;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getOneUser(id) {
        try {
            const user = await connection.query(getOneUser, [id]);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async insertUser(user, contrasena) {
        const connectionTransaction = await connection.getConnection();
        try {
            await connectionTransaction.beginTransaction();
            
            const { nombre, apellido_paterno, apellido_materno, correo_electronico, fecha_de_nacimiento, nivel_id, departamento_id } = user;
            
            const [newUser] = await connectionTransaction.execute(insertUser, [nombre, apellido_paterno, apellido_materno, correo_electronico, fecha_de_nacimiento, nivel_id, departamento_id]);
            const usuario_id = newUser.insertId;
            
            await ContrasenasModel.insertContrasena({ contrasena, usuario_id }, connectionTransaction);
            
            await connectionTransaction.commit();
            return { usuario_id };
        } catch (error) {
            await connectionTransaction.rollback();
            throw new Error(error);
        } finally {
            connectionTransaction.release();
        }
    }

    static async updateUser(id, user, contrasena = null) {
        const connectionTransaction = await connection.getConnection();
        try {
            await connectionTransaction.beginTransaction();
            
            const { nombre, apellido_paterno, apellido_materno, correo_electronico, fecha_de_nacimiento, nivel_id, departamento_id } = user;
            await connectionTransaction.execute(updateUser, [nombre, apellido_paterno, apellido_materno, correo_electronico, fecha_de_nacimiento, nivel_id, departamento_id, id]);
            
            if (contrasena) {
                await ContrasenasModel.updateContrasena({ contrasena, usuario_id: id }, connectionTransaction);
            }
            
            await connectionTransaction.commit();
            return { usuario_id: id };
        } catch (error) {
            await connectionTransaction.rollback();
            throw new Error(error);
        } finally {
            connectionTransaction.release();
        }
    }

    static async deleteUser(id) {
        try {
            await connection.execute(deleteUser, [id]);
            return { message: 'Usuario eliminado correctamente' };
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = UsuariosModel;
