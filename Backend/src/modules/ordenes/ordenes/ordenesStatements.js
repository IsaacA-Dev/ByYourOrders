class OrdenesStatements {
    static getAllOrdenes = `
    SELECT
        o.orden_id,
        o.tipo,
        o.creado_el,
        o.modelo_id,
        m.nombre,        
        o.cantidad,
        o.estatus,
        o.cotizacion_id,
        o.activo,
        o.creado_el,
        o.actualizado_el
    FROM Ordenes o
    INNER JOIN Modelos m ON o.modelo_id = m.modelo_id
    WHERE o.activo = 1
    ORDER BY o.creado_el ASC
    `;

    static getOrdenesByEstatus = `
    SELECT
        o.orden_id,
        o.tipo,
        o.creado_el,
        o.modelo_id,
        m.nombre,        
        o.cantidad,
        o.estatus,
        o.cotizacion_id
    FROM Ordenes o
    INNER JOIN Modelos m ON o.modelo_id = m.modelo_id
    WHERE o.activo = 1 AND o.estatus = ?
    ORDER BY o.creado_el ASC
    `;

    static getAllActiveOrdenes = `
    SELECT
        o.orden_id,
        o.tipo,
        o.creado_el,
        o.modelo_id,
        m.nombre,        
        o.cantidad,
        o.estatus,
        o.cotizacion_id
    FROM Ordenes o
    INNER JOIN Modelos m ON o.modelo_id = m.modelo_id
    WHERE o.activo = 1 AND o.estatus != 'Completada'
    ORDER BY o.creado_el ASC
    `;

    static getOrdenById = `
    SELECT
        o.orden_id,
        o.tipo,
        o.creado_el,
        o.modelo_id,
        m.nombre,        
        o.cantidad,
        o.estatus,
        o.cotizacion_id
    FROM Ordenes o
    INNER JOIN Modelos m ON o.modelo_id = m.modelo_id
    WHERE o.activo = 1 AND o.orden_id = ?
    `;

    static getOrdenByCotizacionId = `
    SELECT
        o.orden_id,
        o.tipo,
        o.creado_el,
        o.modelo_id,
        m.nombre,        
        o.cantidad,
        o.estatus,
        o.cotizacion_id
    FROM Ordenes o
    INNER JOIN Modelos m ON o.modelo_id = m.modelo_id
    WHERE o.activo = 1 AND o.cotizacion_id = ?
    `;

    static getOrdenByModeloId = `
    SELECT
        o.orden_id,
        o.tipo,
        o.creado_el,
        o.modelo_id,
        m.nombre,        
        o.cantidad,
        o.estatus,
        o.cotizacion_id
    FROM Ordenes o
    INNER JOIN Modelos m ON o.modelo_id = m.modelo_id
    WHERE o.activo = 1 AND o.modelo_id = ?;
    `;

    static insertOrden = `
    INSERT INTO Ordenes(
        tipo, 
        modelo_id, 
        cantidad,
        cotizacion_id
    ) VALUES (?, ?, ?, ?)
    `;

    static updateOrden = `
    UPDATE Ordenes SET
        tipo = ?,
        fecha = ?,
        modelo_id = ?,
        cantidad = ?,
        estatus = ?,
        cotizacion_id = ?
    WHERE orden_id = ?
    `;

    static updateEstatusOrden = `
    UPDATE Ordenes SET
        estatus = ?
    WHERE orden_id = ?
    `;

    static deleteOrden = `
    DELETE FROM Ordenes WHERE orden_id = ?
    `;
}

module.exports = OrdenesStatements;
// Este archivo contiene las declaraciones SQL para la tabla de Ordenes
// de la base de datos.