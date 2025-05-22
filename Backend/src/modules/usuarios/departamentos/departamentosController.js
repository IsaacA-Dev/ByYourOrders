const DepartamentosModel = require('./departamentosModel');
const responses = require('../../../base/responses');

const getAllDepartamentos = async (req, res) => {
    try {
        const departamentos = await DepartamentosModel.getAllDepartamentos();

        if (!departamentos || (Array.isArray(departamentos) && departamentos.length === 0)) {
            return responses.empty(req, res);
        }
        
        responses.success(req, res, departamentos);
    } catch (error) {
        responses.error(req, res, error.message, 500);
    }
}

const getOneDepartamento = async (req, res) => {
    try {
        const id = req.params.id;

        if (isNaN(id)) {
            return responses.fail(req, res, "ID de nivel no válido", 400);
        }

        const departamento = await DepartamentosModel.getOneDepartamento(id);
        
        if(!departamento || (Array.isArray(departamento) && departamento.length === 0)) {    
            return responses.fail(req, res, "Departamento no encontrado", 404);
        }
        
        responses.success(req, res, departamento);
    } catch (error) {
        responses.error(req, res, error.message, 500);
    }
}

const insertDepartamento = async (req, res) => {
    try {        
        const departamento = await DepartamentosModel.insertDepartamento(req.body);
        responses.success(req, res, { id: departamento.insertId, ...req.body});
    } catch (error) {
        responses.error(req, res, error.message, 500);
    }
}

const updateDepartamento = async (req, res) => {
    try {
        const id = req.params.id;
        const departamento = await DepartamentosModel.updateDepartamento(id, req.body);
        if (!departamento || !departamento.affectedRows) {
            return responses.fail(req, res, "Error al actualizar departamento", 422);
        }
        if (departamento.affectedRows === 0) {
            return responses.fail(req, res, "Departamento no encontrado", 404);
        }
        responses.success(req, res, { id: id, ...req.body }, 200);
    } catch (error) {
        responses.error(req, res, error.message, 500);
    }
}

const deleteDepartamento = async (req, res) => {
    try {
        const id = req.params.id;
        const departamento = await DepartamentosModel.deleteDepartamento(id);
        responses.success(req, res, departamento);
    } catch (error) {
        responses.error(req, res, error.message, 500);
    }
}

module.exports = {
    getAllDepartamentos,
    getOneDepartamento,
    insertDepartamento,
    updateDepartamento,
    deleteDepartamento
}