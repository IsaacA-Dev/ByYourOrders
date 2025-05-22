const connectin = require('../../../database/connection');
const OrdenesStatements = require('./ordenesStatements');

class OrdenesModel {
    static async getAllOrdenes() {
        try {
            const ordenes = await connectin.query(OrdenesStatements.getAllOrdenes);
            return ordenes; 
        } catch (error) {
            throw error;
        }
    }

    static async getOrdenesByEstatus(estatus) {
        try {
            const ordenes = await connectin.query(OrdenesStatements.getOrdenesByEstatus, [estatus]);
            return ordenes; 
        } catch (error) {
            throw error;
        }
    }

    static async getAllActiveOrdenes() {
        try {
            const ordenes = await connectin.query(OrdenesStatements.getAllActiveOrdenes);
            return ordenes;
        } catch (error) {
            throw error;
        }
    }

    static async getOrdenById(ordenId) {
        try {
            const orden = await connectin.query(OrdenesStatements.getOrdenById, [ordenId]);
            return orden;
        } catch (error) {
            throw error;
        }
    }

    static async getOrdenByCotizacionId(cotizacionId) {
        try {
            const orden = await connectin.query(OrdenesStatements.getOrdenByCotizacionId, [cotizacionId]);
            return orden;
        } catch (error) {
            throw error;
        }
    }

    static async getOrdenByModeloId(modeloId) {
        try {
            const orden = await connectin.query(OrdenesStatements.getOrdenByModeloId, [modeloId]);
            return orden;
        } catch (error) {
            throw error;
        }
    }

    static async insertOrden(orden) {
        try {
            const result = await connectin.execute(OrdenesStatements.insertOrden, [
                orden.tipo,
                orden.modelo_id,
                orden.cantidad,
                orden.cotizacion_id
            ]);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async updateOrden(orden) {
        try {
            const result = await connectin.execute(OrdenesStatements.updateOrden, [
                orden.tipo,
                orden.fecha,
                orden.modelo_id,
                orden.cantidad,
                orden.estatus,
                orden.cotizacion_id,
                orden.orden_id
            ]);
            return result; 
        } catch (error) {
            throw error;
        }
    }

    static async updateEstatusOrden(ordenId, estatus) {
        try {
            const result = await connectin.execute(OrdenesStatements.updateEstatusOrden, [estatus, ordenId]);
            return result; 
        } catch (error) {
            throw error;
        }
    }

    static async deleteOrden(ordenId) {
        try {
            const result = await connectin.execute(OrdenesStatements.deleteOrden, [ordenId]);
            return result; 
        } catch (error) {
            throw error;
        }
    }

}

module.exports = OrdenesModel;