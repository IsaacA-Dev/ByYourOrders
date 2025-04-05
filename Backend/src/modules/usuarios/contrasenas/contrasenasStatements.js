//contrasenasStatements.js

// Statements
const insertContrasena = `
    INSERT INTO Contrasenas (
        usuario_id,
        contrasena_hash
    ) VALUES (?,?)
`;

const updateContrasena = `
    UPDATE Contrasenas SET
        contrasena_hash = ?
    WHERE usuario_id = ?
`;

module.exports = {
    insertContrasena,
    updateContrasena
}