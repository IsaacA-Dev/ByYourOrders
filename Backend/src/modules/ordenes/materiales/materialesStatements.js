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
    FROM materiales
    WHERE activo = true
    `;

    static getMaterialById = `${this.getAllMateriales} AND material_id = ?`;

    static getMaterialByName = `${this.getAllMateriales} AND nombre = ?`;

    static insertMaterial = `
    INSERT INTO materiales(
    nombre, 
    unidad, 
    costo
    ) VALUES (?, ?, ?)
    `;

    static updateMaterial = `
    UPDATE materiales SET
    nombre = ?,
    unidad = ?,
    costo = ?
    WHERE material_id = ?
    `;

    static deleteMaterial = `
    DELETE FROM materiales WHERE material_id = ?
    `;
}

module.exports = MaterialesStatements;