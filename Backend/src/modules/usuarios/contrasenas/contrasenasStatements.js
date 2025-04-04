//contrasenasStatements.js

// Statements
const insertContrasena = `
    INSERT INTO Contrasenas (
        contrasena,
        usuario_id
    ) VALUES (?,?)
`;

const updateContrasena = `
    UPDATE Contrasenas SET
        contrasena = ?
    WHERE usuario_id = ?
`;

module.exports = {
    insertContrasena,
    updateContrasena
}