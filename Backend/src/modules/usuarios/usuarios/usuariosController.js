const UsuariosModel = require('./usuariosModel');
const responses = require('../../../base/responses');

const getAllUsers = async (req, res) => {
  try {
    const users = await UsuariosModel.getAllUsers();
    
    if (!users || (Array.isArray(users) && users.length === 0)) {
      return responses.empty(req, res);
    }
    
    responses.success(req, res, users);
  } catch (error) {
    responses.error(req, res, error.message, 500);
  }
};

const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    
    // Validar formato del ID
    if (isNaN(id)) {
      return responses.fail(req, res, "ID de usuario no válido", 400);
    }
    
    const user = await UsuariosModel.getOneUser(id);
    
    if (!user || (Array.isArray(user) && user.length === 0)) {
      return responses.fail(req, res, "Usuario no encontrado", 404);
    }
    
    responses.success(req, res, user);
  } catch (error) {
    responses.error(req, res, error.message, 500);
  }
};

const insertUser = async (req, res) => {
  try {
    // Validar datos de entrada
    if (!req.body || Object.keys(req.body).length === 0) {
      return responses.fail(req, res, "Datos de usuario requeridos", 400);
    }
    
    const requiredFields = ['nombre', 'apellido_paterno', 'correo_electronico', 'nivel_id', 'departamento_id'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return responses.fail(req, res, `Campo ${field} es requerido`, 400);
      }
    }
    
    const user = await UsuariosModel.insertUser(req.body);
    
    if (!user || !user.insertId) {
      return responses.fail(req, res, "Error al crear usuario", 422);
    }
    
    responses.success(req, res, { id: user.insertId, ...req.body }, 201);
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return responses.fail(req, res, "Ya existe un usuario con ese correo electrónico", 409);
    }
    responses.error(req, res, error.message, 500);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    
    // Validar formato del ID
    if (isNaN(id)) {
      return responses.fail(req, res, "ID de usuario no válido", 400);
    }
    
    // Validar datos de entrada
    if (!req.body || Object.keys(req.body).length === 0) {
      return responses.fail(req, res, "Datos de usuario requeridos", 400);
    }
    
    // Verificar si el usuario existe
    const existingUser = await UsuariosModel.getOneUser(id);
    if (!existingUser || (Array.isArray(existingUser) && existingUser.length === 0)) {
      return responses.fail(req, res, "Usuario no encontrado", 404);
    }
    
    const user = await UsuariosModel.updateUser(id, req.body);
    
    if (!user || user.affectedRows === 0) {
      return responses.fail(req, res, "Error al actualizar usuario", 422);
    }
    
    responses.success(req, res, { id, ...req.body });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return responses.fail(req, res, "Ya existe un usuario con ese correo electrónico", 409);
    }
    responses.error(req, res, error.message, 500);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    
    // Validar formato del ID
    if (isNaN(id)) {
      return responses.fail(req, res, "ID de usuario no válido", 400);
    }
    
    // Verificar si el usuario existe
    const existingUser = await UsuariosModel.getOneUser(id);
    if (!existingUser || (Array.isArray(existingUser) && existingUser.length === 0)) {
      return responses.fail(req, res, "Usuario no encontrado", 404);
    }
    
    const user = await UsuariosModel.deleteUser(id);
    
    if (!user || user.affectedRows === 0) {
      return responses.fail(req, res, "Error al eliminar usuario", 422);
    }
    
    responses.success(req, res, { message: "Usuario eliminado correctamente", id });
  } catch (error) {
    responses.error(req, res, error.message, 500);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  insertUser,
  updateUser,
  deleteUser
};