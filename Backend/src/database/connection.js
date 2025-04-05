const config = require('../config');
const mysql = require('mysql2/promise'); 

// Crear pool de conexiones
const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Función para ejecutar consultas sin transacción
const query = async (sql, params = []) => {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query(sql, params);
    console.log(sql, params);
    console.log(results);
    
    return results;
  } catch (err) {
    throw err;
  } finally {
    connection.release();
  }
};

// Función para ejecutar consultas preparadas sin transacción
const execute = async (sql, params = []) => {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (err) {
    throw err;
  } finally {
    connection.release();
  }
};

// Obtener una conexión manualmente para transacciones
const getConnection = async () => {
  return await pool.getConnection();
};

module.exports = {
  query,
  execute,
  getConnection
};
