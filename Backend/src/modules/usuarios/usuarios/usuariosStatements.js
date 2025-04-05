//usuariosStatements.js

// Statements
const getAllUsers = `
  SELECT 
    u.usuario_id, 
    CONCAT(u.nombre, ' ', u.apellido_paterno, ' ', u.apellido_materno) AS nombre_completo,
    u.correo_electronico, 
    u.fecha_de_nacimiento, 
    u.nivel_id, 
    n.nombre AS nivel_nombre,
    u.departamento_id, 
    d.nombre AS departamento_nombre,
    u.activo, 
    u.creado_el, 
    u.actualizado_el 
  FROM Usuarios AS u 
  INNER JOIN Niveles AS n ON u.nivel_id = n.nivel_id 
  INNER JOIN Departamentos AS d ON u.departamento_id = d.departamento_id
`;

const getOneUser = `${getAllUsers} WHERE u.usuario_id = ?`;

const insertUser = `
  INSERT INTO Usuarios (
    nombre, 
    apellido_paterno, 
    apellido_materno, 
    correo_electronico, 
    fecha_de_nacimiento, 
    nivel_id, 
    departamento_id 
  ) VALUES (?, ?, ?, ?, ?, ?, ?)
`;

const updateUser = `
  UPDATE Usuarios 
  SET 
    nombre = ?,
    apellido_paterno = ?,
    apellido_materno = ?,
    correo_electronico = ?,
    fecha_de_nacimiento = ?,
    nivel_id = ?,
    departamento_id = ?,
    activo = ?,
    actualizado_el = CURRENT_TIMESTAMP
  WHERE usuario_id = ?
`;

const deleteUser = 'DELETE FROM Usuarios WHERE usuario_id = ?';



module.exports = {
  getAllUsers,
  getOneUser,
  insertUser,
  updateUser,
  deleteUser
};