require('dotenv').config();

module.exports = {
  port: process.env.PORT || 4000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME2,
  },
  bcrypt: {
    saltRounds: 10
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '6h',
  },
};
