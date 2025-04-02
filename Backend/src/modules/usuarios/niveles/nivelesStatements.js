//nivelesStatements.js

const getAllNiveles = `
    SELECT 
        nivel_id, 
        nombre,
        descripcion,
        activo,
        creado_el,
        actualizado_el
    FROM Niveles
`;

const getOneNivel = `${getAllNiveles} WHERE nivel_id = ?`;

const insertNivel = `
    INSERT INTO Niveles (
        nombre,
        descripcion,
        activo
    ) VALUES (?,?,?)
`;

const updateNivel = `
    UPDATE Niveles SET
        nombre = ?,
        descripcion = ?,
        activo = ?
    WHERE nivel_id = ?
`;

const deleteNivel = `
    DELETE FROM Niveles WHERE nivel_id = ?
`;

module.exports = {
    getAllNiveles,
    getOneNivel,
    insertNivel,
    updateNivel,
    deleteNivel
};