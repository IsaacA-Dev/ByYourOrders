const connection = require('../../../database/connection');
const { getAllOrdenes } = require('../ordenes/ordenesModel');
const OrdenesProcesosSTatements = require('./ordenesProcesosStatements');

class OrdenesProcesosModel {

    static async getAllOrdenesProcesos() {
        try {
            const ordenesProcesos = await connection.query(OrdenesProcesosSTatements.getAllOrdenesProcesos);
            return ordenesProcesos; 
        } catch (error) {
            throw error;
        }
    }

    static async getAllOrdenesProcesosByModeloId(modeloId) {
        try {
            const ordenesProcesos = await connection.query(OrdenesProcesosSTatements.getAllOrdenesProcesosByModeloId, [modeloId]);
            return ordenesProcesos; 
        } catch (error) {
            throw error;
        }
    }

    static async getAllOrdenesProcesosByOrdenId(ordenId) {
        try {
            const ordenesProcesos = await connection.query(OrdenesProcesosSTatements.getAllOrdenesProcesosByOrdenId, [ordenId]);
            return ordenesProcesos; 
        } catch (error) {
            throw error;
        }
    }

    static async getAllOrdenesProcesosByUsuarioId(usuarioId) {
        try {
            const ordenesProcesos = await connection.query(OrdenesProcesosSTatements.getAllOrdenesProcesosByUsuarioId, [usuarioId]);
            return ordenesProcesos; 
        } catch (error) {
            throw error;
        }
    }

    static async insertOrdenProceso(ordenProceso) {
        try {
            const result = await connection.query(OrdenesProcesosSTatements.insertOrdenProceso, [
                ordenProceso.orden_id,
                ordenProceso.usuario_id,
                ordenProceso.operacion,
                ordenProceso.notas
            ]);
            return result; 
        } catch (error) {
            throw error;
        }
    }

    static async updateOrdenProceso(ordenProceso) {
        try {
            const result = await connection.query(OrdenesProcesosSTatements.updateOrdenProceso, [
                ordenProceso.orden_id,
                ordenProceso.usuario_id,
                ordenProceso.operacion,
                ordenProceso.notas,
                ordenProceso.orden_proceso_id
            ]);
            return result; 
        } catch (error) {
            throw error;
        }
    }

    static async deleteOrdenProceso(ordenProcesoId) {
        try {
            const result = await connection.query(OrdenesProcesosSTatements.deleteOrdenProceso, [ordenProcesoId]);
            return result; 
        } catch (error) {
            throw error;
        }
    }

    static async deleteAllOrdenesProcesosByOrdenId(ordenId) {
        try {
            const result = await connection.query(OrdenesProcesosSTatements.deleteAllOrdenesProcesosByOrdenId, [ordenId]);
            return result; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OrdenesProcesosModel;