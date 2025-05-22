class MaterialesStatements {
    static getAllMateriales = `
    SELECT
    material_id,
    nombre,
    unidad,
    costo,
    activo,
    creado_el,
    actualizado_el
    FROM Materiales
    WHERE activo = 1
    `;

    static getMaterialById = `${this.getAllMateriales} AND material_id = ?`;

    static getMaterialByName = `${this.getAllMateriales} AND nombre = ?`;

    static insertMaterial = `
    INSERT INTO Materiales(
    nombre, 
    unidad, 
    costo
    ) VALUES (?, ?, ?)
    `;

    static updateMaterial = `
    UPDATE Materiales SET
    nombre = ?,
    unidad = ?,
    costo = ?
    WHERE material_id = ?
    `;

    static deleteMaterial = `
    DELETE FROM Materiales WHERE material_id = ?
    `;
}

module.exports = MaterialesStatements;