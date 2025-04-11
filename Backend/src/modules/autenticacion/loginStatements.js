
const loginUsersByEmailorId = `
SELECT 
    u.usuario_id, 
    u.nombre, 
    u.apellido_paterno, 
    u.apellido_materno, 
    u.correo_electronico, 
    u.nivel_id,
    n.nombre AS rol, 
    u.departamento_id,
    c.contrasena_hash
FROM Usuarios u 
LEFT JOIN Niveles n ON u.nivel_id = n.nivel_id
JOIN Contrasenas c ON u.usuario_id = c.usuario_id
WHERE (u.correo_electronico = ? OR u.usuario_id = ?) AND u.activo = 1
`;


module.exports = {
    loginUsersByEmailorId
};


