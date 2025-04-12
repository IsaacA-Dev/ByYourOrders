const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sanitizeMiddleware = require('./middlewares/sanitize'); 
const { body, validationResult } = require('express-validator');

const app = express();

// Middlewares
app.use(express.json()); 
app.use(cors()); 
app.use(morgan('dev')); 
app.use(sanitizeMiddleware);

const mainRoutes = require('./modules/routes');
app.use('/api', mainRoutes);

module.exports = app;