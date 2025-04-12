class bomsStatements {

    static getAllBomsByModel = `
    SELECT 
        b.modelo_id,
        m.nombre AS material_nombre,
        b.cantidad,
        b.material_id
    FROM boms b
    INNER JOIN materiales m ON b.material_id = m.material_id
    GROUP BY b.modelo_id, b.material_id
    ORDER BY b.modelo_id, m.nombre;
    `;

    static getAllModelsWithMaterials = `
    SELECT 
        mo.modelo_id,
        mo.nombre AS modelo_nombre,
        b.material_id,
        m.nombre AS material_nombre,
        b.cantidad
    FROM boms b
    INNER JOIN modelos mo ON b.modelo_id = mo.modelo_id
    INNER JOIN materiales m ON b.material_id = m.material_id
    ORDER BY mo.nombre, m.nombre;
    `;


    static getBomsByModelId = `
    SELECT 
        b.modelo_id,
        m.nombre AS material_nombre,
        b.cantidad,
        b.material_id
    FROM boms b
    INNER JOIN materiales m ON b.material_id = m.material_id
    WHERE b.modelo_id = ?
    ORDER BY m.nombre;
    `;

    static deleteBomsByModelId = `
    DELETE FROM boms
    WHERE modelo_id = ?;
    `;

    static updateMaterialQuantity = `
    UPDATE boms
    SET cantidad = ?
    WHERE modelo_id = ? AND material_id = ?;
    `;

    static insertMaterialToModel = `
    INSERT INTO boms (modelo_id, material_id, cantidad)
    VALUES (?, ?, ?);
    `;

}

module.exports = bomsStatements;