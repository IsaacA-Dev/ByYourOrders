const connection = require('../../../database/connection');
const { insertContrasena, updateContrasena } = require('./contrasenasStatements');
const hash = require('../../../base/hash'); 

class ContrasenasModel {
    static async insertContrasena(contrasenaData, connectionTransaction = null) {
        try {
            const { contrasena, usuario_id } = contrasenaData;
            const contrasenaEncriptada = await hash.hash(contrasena);

            const conn = connectionTransaction || connection;
            await conn.execute(insertContrasena, [contrasenaEncriptada, usuario_id]);

            return { usuario_id };
        } catch (error) {
            throw new Error(error);
        }
    }

    static async updateContrasena(contrasenaData, connectionTransaction = null) {
        try {
            const { contrasena, usuario_id } = contrasenaData;
            const contrasenaEncriptada = await hash.hash(contrasena);

            const conn = connectionTransaction || connection;
            await conn.execute(updateContrasena, [contrasenaEncriptada, usuario_id]);

            return { usuario_id };
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = ContrasenasModel;
