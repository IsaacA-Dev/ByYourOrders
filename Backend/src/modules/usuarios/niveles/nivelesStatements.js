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
        descripcion
    ) VALUES (?,?)
`;

const updateNivel = `
    UPDATE Niveles SET
        nombre = ?,
        descripcion = ?
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