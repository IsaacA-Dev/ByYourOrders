const LoginModel = require('./loginModel');
const responses = require('../../base/responses');

const loginUserByEmailOrId = async (req, res, next) => {
    try {
        const { idoremail, password } = req.body;
        
        const result = await LoginModel.loginUserByEmailOrId(idoremail, password);
        return responses.success(req, res,{id: result.user.usuario_id, token: result.token, msg: "Inicio de sesion exitoso"}, 200); 
    } catch (error) {
        responses.error(req, res, error.message, 500);
    }
}
    


module.exports = {
    loginUserByEmailOrId
}

