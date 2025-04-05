const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connection = require('../../database/connection');
const config = require('../../config');
const { loginUsersByEmailorId } = require('./loginStatements');

class LoginModel {

    static async loginUserByEmailOrId(idoremail, password) {
        try {
            console.log('idoremail', idoremail);
            console.log('password', password);
            
            
            const [rows] = await connection.query(loginUsersByEmailorId, [idoremail, idoremail]);
            
            if (rows.length === 0) {
                throw new Error('Usuario no encontrado');
            }
            

            const user = rows;
            console.log('user', user);
            
            const passwordMatch = await bcrypt.compare(password, user.contrasena_hash);
            if (!passwordMatch) {
                throw new Error('Contraseña incorrecta');
            }

            // Generar token
            const token = jwt.sign({ id: user.usuario_id }, config.jwt.secret, { expiresIn: config.jwt.expiresIn });

            return { user, token };
        } catch (error) {
            throw error;
        }
    }

}

module.exports = LoginModel;
