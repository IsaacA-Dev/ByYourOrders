// nivelesController.js
const NivelesModel = require('./nivelesModel');
const responses = require('../../../base/responses');

const getAllNiveles = async (req, res) => {
  try {
    const niveles = await NivelesModel.getAllNiveles();
    
    if (!niveles || (Array.isArray(niveles) && niveles.length === 0)) {
      return responses.empty(req, res);
    }
    
    responses.success(req, res, niveles);
  } catch (error) {
    console.log("error", error);
    responses.error(req, res, error.message, 500);
  }
};

const getOneNivel = async (req, res) => {
  try {
    const id = req.params.id;
    
    // Validar formato del ID si esperas un número
    if (isNaN(id)) {
      return responses.fail(req, res, "ID de nivel no válido", 400);
    }
    
    const nivel = await NivelesModel.getOneNivel(id);
    
    if (!nivel || (Array.isArray(nivel) && nivel.length === 0)) {
      return responses.fail(req, res, "Nivel no encontrado", 404);
    }
    
    responses.success(req, res, nivel);
  } catch (error) {
    responses.error(req, res, error.message, 500);
  }
};

const insertNivel = async (req, res) => {
  try {
    // Validar datos de entrada
    if (!req.body || Object.keys(req.body).length === 0) {
      return responses.fail(req, res, "Datos de nivel requeridos", 400);
    }
    
    const nivel = await NivelesModel.insertNivel(req.body);
    
    if (!nivel || !nivel.insertId) {
      return responses.fail(req, res, "Error al crear nivel", 422);
    }
    
    responses.success(req, res, { id: nivel.insertId, ...req.body }, 201);
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return responses.fail(req, res, "Ya existe un nivel con esos datos", 409);
    }
    responses.error(req, res, error.message, 500);
  }
};

const updateNivel = async (req, res) => {
  try {
    const id = req.params.id;
    
    // Validar formato del ID
    if (isNaN(id)) {
      return responses.fail(req, res, "ID de nivel no válido", 400);
    }
    
    // Validar datos de entrada
    if (!req.body || Object.keys(req.body).length === 0) {
      return responses.fail(req, res, "Datos de nivel requeridos", 400);
    }
    
    // Verificar si el nivel existe
    const existingNivel = await NivelesModel.getOneNivel(id);
    if (!existingNivel || (Array.isArray(existingNivel) && existingNivel.length === 0)) {
      return responses.fail(req, res, "Nivel no encontrado", 404);
    }
    
    const nivel = await NivelesModel.updateNivel(id, req.body);
    
    if (!nivel || nivel.affectedRows === 0) {
      return responses.fail(req, res, "Error al actualizar nivel", 422);
    }
    
    responses.success(req, res, { id, ...req.body });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return responses.fail(req, res, "Ya existe un nivel con esos datos", 409);
    }
    responses.error(req, res, error.message, 500);
  }
};

const deleteNivel = async (req, res) => {
  try {
    const id = req.params.id;
    
    // Validar formato del ID
    if (isNaN(id)) {
      return responses.fail(req, res, "ID de nivel no válido", 400);
    }
    
    // Verificar si el nivel existe
    const existingNivel = await NivelesModel.getOneNivel(id);
    if (!existingNivel || (Array.isArray(existingNivel) && existingNivel.length === 0)) {
      return responses.fail(req, res, "Nivel no encontrado", 404);
    }
    
    const nivel = await NivelesModel.deleteNivel(id);
    
    if (!nivel || nivel.affectedRows === 0) {
      return responses.fail(req, res, "Error al eliminar nivel", 422);
    }
    
    responses.success(req, res, { message: "Nivel eliminado correctamente", id });
  } catch (error) {
    if (error.code === 'ER_ROW_IS_REFERENCED') {
      return responses.fail(req, res, "No se puede eliminar: el nivel está siendo utilizado", 409);
    }
    responses.error(req, res, error.message, 500);
  }
};

module.exports = {
  getAllNiveles,
  getOneNivel,
  insertNivel,
  updateNivel,
  deleteNivel
};