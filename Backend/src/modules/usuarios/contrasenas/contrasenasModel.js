const connection = require('../../../database/connection');
const { insertContrasena, updateContrasena } = require('./contrasenasStatements');
const hash = require('../../../base/hash'); 

class ContrasenasModel {
    static async insertContrasena(contrasenaData, connectionTransaction = null) {
        try {
            const { usuario_id, contrasena,  } = contrasenaData;
            
            const contrasenaEncriptada = await hash.hash(contrasena);

            const conn = connectionTransaction || connection;
            await conn.execute(insertContrasena, [usuario_id ,contrasenaEncriptada]);

            return { usuario_id };
        } catch (error) {
            throw new Error(error);
        }
    }

    static async updateContrasena(id, contrasenaData) {
        const connectionTransaction = await connection.getConnection();
    
        try {
            await connectionTransaction.beginTransaction();
    
            const { contrasena, confirm_contrasena } = contrasenaData;
    
            if (contrasena !== confirm_contrasena) {
                throw new Error("Las contraseñas no coinciden.");
            }
    
            const contrasenaEncriptada = await hash.hash(contrasena);
    
            await connectionTransaction.execute(
                updateContrasena,
                [contrasenaEncriptada, id]
            );
    
            await connectionTransaction.commit();
            return { usuario_id: id };
        } catch (error) {
            await connectionTransaction.rollback();
            throw error;
        } finally {
            connectionTransaction.release();
        }
    }
    
}

module.exports = ContrasenasModel;
