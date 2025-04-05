const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(express.json()); 
app.use(cors()); 
app.use(morgan('dev')); 

//Importar y usar la ruta principal
const mainRoutes = require('./modules/routes');
app.use('/api', mainRoutes);

module.exports = app;
