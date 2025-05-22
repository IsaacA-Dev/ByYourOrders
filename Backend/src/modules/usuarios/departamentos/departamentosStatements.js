//departamentiosStatements.js

// Statements
const getAllDepartamentos = `
    SELECT 
        departamento_id, 
        nombre,
        descripcion,
        activo,
        creado_el,
        actualizado_el
    FROM Departamentos
    WHERE activo = true
`;

const getOneDepartamento = `${getAllDepartamentos} AND departamento_id = ?`;

const insertDepartamento = `
    INSERT INTO Departamentos (
        nombre,
        descripcion
    ) VALUES (?,?)
`;

const updateDepartamento = `
    UPDATE Departamentos SET
        nombre = ?,
        descripcion = ?
    WHERE departamento_id = ?
`;

const deleteDepartamento = `
    DELETE FROM Departamentos WHERE departamento_id = ?
`;


module.exports = {
    getAllDepartamentos,
    getOneDepartamento,
    insertDepartamento,
    updateDepartamento,
    deleteDepartamento
};