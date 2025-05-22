class OrdenesProcesosStatements {
    // Consulta base reutilizable
    static baseQuery = `
    SELECT
        op.orden_proceso_id,
        op.orden_id,
        op.usuario_id,
        op.fecha_hora,
        op.operacion,
        op.notas
    FROM Ordenes_Procesos AS op
    INNER JOIN Ordenes AS o ON o.id = op.orden_id
    INNER JOIN Usuarios AS u ON u.id = o.usuario_id
    `;

    // Consultas específicas reutilizando la base
    static getAllOrdenesProcesosByModeloId = `
    ${this.baseQuery}
    WHERE o.modelo_id = ?
    ORDER BY op.fecha_hora DESC
    `;

    static getAllOrdenesProcesosByOrdenId = `
    ${this.baseQuery}
    WHERE o.id = ?
    ORDER BY op.fecha_hora DESC
    `;

    static getAllOrdenesProcesosByUsuarioId = `
    ${this.baseQuery}
    WHERE u.id = ?
    ORDER BY op.fecha_hora DESC
    `;

    static getAllOrdenesProcesos = `
    ${this.baseQuery}
    ORDER BY op.fecha_hora DESC
    `;

    // Consultas para operaciones CRUD
    static insertOrdenProceso = `
    INSERT INTO Ordenes_Procesos (
        orden_id,
        usuario_id,
        operacion,
        notas
    ) VALUES (?, ?, ?, ?)
    `;

    static updateOrdenProceso = `
    UPDATE Ordenes_Procesos
    SET
        orden_id = ?,
        usuario_id = ?,
        operacion = ?,
        notas = ?
    WHERE orden_proceso_id = ?
    `;

    static deleteOrdenProceso = `
    DELETE FROM Ordenes_Procesos
    WHERE orden_proceso_id = ?
    `;

    static deleteAllOrdenesProcesosByOrdenId = `
    DELETE FROM Ordenes_Procesos
    WHERE orden_id = ?
    `;
}

module.exports = OrdenesProcesosStatements;