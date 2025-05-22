const OrdenesModel = require('./ordenesModel');
const response = require('../../../base/responses');

class OrdenesController {

    static async getAllOrdenes(req, res) {
        try {
            const ordenes = await OrdenesModel.getAllOrdenes();
            return response.success(req, res, ordenes, 200);
        } catch (error) {
            console.error('Error en getAllOrdenes:', error);
            return response.error(req, res, 'Error al consultar las órdenes.', 500);
        }
    }

    static async getOrdenesByEstatus(req, res) {
        const { estatus } = req.params;
        try {
            const ordenes = await OrdenesModel.getOrdenesByEstatus(estatus);
            if (!ordenes || ordenes.length === 0) {
                return response.fail(req, res, `No se encontraron órdenes con estatus: ${estatus}.`, 404);
            }
            return response.success(req, res, ordenes, 200);
        } catch (error) {
            console.error('Error en getOrdenesByEstatus:', error);
            return response.error(req, res, 'Error al consultar las órdenes por estatus.', 500);
        }
    }

    static async getAllActiveOrdenes(req, res) {
        try {
            const ordenes = await OrdenesModel.getAllActiveOrdenes();
            if (!ordenes || ordenes.length === 0) {
                return response.fail(req, res, 'No se encontraron órdenes activas.', 404);
            }
            return response.success(req, res, ordenes, 200);
        } catch (error) {
            console.error('Error en getAllActiveOrdenes:', error);
            return response.error(req, res, 'Error al consultar las órdenes activas.', 500);
        }
    }

    static async getOrdenById(req, res) {
        const { ordenId } = req.params;
        try {
            const orden = await OrdenesModel.getOrdenById(ordenId);
            if (!orden) {
                return response.fail(req, res, `No se encontró la orden con ID: ${ordenId}.`, 404);
            }
            return response.success(req, res, orden, 200);
        } catch (error) {
            console.error('Error en getOrdenById:', error);
            return response.error(req, res, 'Error al consultar la orden.', 500);
        }
    }

    static async getOrdenByCotizacionId(req, res) {
        const { cotizacionId } = req.params;
        try {
            const orden = await OrdenesModel.getOrdenByCotizacionId(cotizacionId);
            if (!orden) {
                return response.fail(req, res, `No se encontró la orden con cotización ID: ${cotizacionId}.`, 404);
            }
            return response.success(req, res, orden, 200);
        } catch (error) {
            console.error('Error en getOrdenByCotizacionId:', error);
            return response.error(req, res, 'Error al consultar la orden por cotización.', 500);
        }
    }

    static async getOrdenByModeloId(req, res) {
        const { modeloId } = req.params;
        try {
            console.log(modeloId);
            const orden = await OrdenesModel.getOrdenByModeloId(modeloId);
            console.log(modeloId);
            if (!orden) {
                return response.fail(req, res, `No se encontró la orden con modelo ID: ${modeloId}.`, 404);
            }
            return response.success(req, res, orden, 200);
        } catch (error) {
            console.error('Error en getOrdenByModeloId:', error);
            return response.error(req, res, 'Error al consultar la orden por modelo.', 500);
        }
    }

    static async insertOrden(req, res) {
        const orden = req.body;
        try {
            if (!orden || Object.keys(orden).length === 0) {
                return response.fail(req, res, 'El cuerpo de la solicitud está vacío.', 400);
            }
            const result = await OrdenesModel.insertOrden(orden);
            return response.success(req, res, { id: result.insertId }, 201, 'Orden creada exitosamente.');
        } catch (error) {
            console.error('Error en insertOrden:', error);
            return response.error(req, res, 'Error al insertar la orden.', 500);
        }
    }

    static async updateOrden(req, res) {
        const { ordenId } = req.params;
        const orden = req.body;
        try {
            if (!orden || Object.keys(orden).length === 0) {
                return response.fail(req, res, 'El cuerpo de la solicitud está vacío.', 400);
            }
            const result = await OrdenesModel.updateOrden(ordenId, orden);
            if (result === 0) {
                return response.fail(req, res, `No se encontró la orden con ID: ${ordenId}.`, 404);
            }
            return response.success(req, res, { affectedRows: result }, 200, 'Orden actualizada exitosamente.');
        } catch (error) {
            console.error('Error en updateOrden:', error);
            return response.error(req, res, 'Error al actualizar la orden.', 500);
        }
    }

    static async deleteOrden(req, res) {
        const { ordenId } = req.params;
        try {
            const result = await OrdenesModel.deleteOrden(ordenId);
            if (result === 0) {
                return response.fail(req, res, `No se encontró la orden con ID: ${ordenId}.`, 404);
            }
            return response.success(req, res, { affectedRows: result }, 200, 'Orden eliminada exitosamente.');
        } catch (error) {
            console.error('Error en deleteOrden:', error);
            return response.error(req, res, 'Error al eliminar la orden.', 500);
        }
    }

    static async updateEstatusOrden(req, res) {
        const { ordenId } = req.params;
        const { estatus } = req.body;
        try {
            if (!estatus) {
                return response.fail(req, res, 'El campo estatus es obligatorio.', 400);
            }
            const result = await OrdenesModel.updateEstatusOrden(ordenId, estatus);
            if (result === 0) {
                return response.fail(req, res, `No se encontró la orden con ID: ${ordenId}.`, 404);
            }
            return response.success(req, res, { affectedRows: result }, 200, 'Estatus de la orden actualizado exitosamente.');
        } catch (error) {
            console.error('Error en updateEstatusOrden:', error);
            return response.error(req, res, 'Error al actualizar el estatus de la orden.', 500);
        }
    }
}

module.exports = OrdenesController;