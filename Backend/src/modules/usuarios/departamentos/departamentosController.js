const DepartamentosModel = require('./departamentosModel');
const responses = require('../../../base/responses');

const getAllDepartamentos = async (req, res) => {
    try {
        const departamentos = await DepartamentosModel.getAllDepartamentos();
        responses.success(req, res, departamentos);
    } catch (error) {
        responses.error(req, res, error.message, 500);
    }
}

const getOneDepartamento = async (req, res) => {
    try {
        const id = req.params.id;
        const departamento = await DepartamentosModel.getOneDepartamento(id);
        responses.success(req, res, departamento);
    } catch (error) {
        responses.error(req, res, error.message, 500);
    }
}

const insertDepartamento = async (req, res) => {
    try {
        const departamento = await DepartamentosModel.insertDepartamento(req.body);
        responses.success(req, res, departamento);
    } catch (error) {
        responses.error(req, res, error.message, 500);
    }
}

const updateDepartamento = async (req, res) => {
    try {
        const id = req.params.id;
        const departamento = await DepartamentosModel.updateDepartamento(id, req.body);
        responses.success(req, res, departamento);
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