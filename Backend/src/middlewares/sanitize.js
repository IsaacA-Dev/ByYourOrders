const sanitizeHtml = require('sanitize-html');

module.exports = (req, res, next) => {

    const sanitizeObject = (obj) => {
        for (const key in obj) {
            if (typeof obj[key] === 'string') {
                obj[key] = sanitizeHtml(obj[key]);
            } else if (Array.isArray(obj[key])) {
                obj[key] = obj[key].map((item) =>
                    typeof item === 'string' ? sanitizeHtml(item) : item
                );
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                sanitizeObject(obj[key]); // Recursión para objetos anidados
            }
        }
    };

    // Sanitiza los datos en req.body
    if (req.body) {
        sanitizeObject(req.body);
    }

    // Sanitiza los datos en req.query
    if (req.query) {
        sanitizeObject(req.query);
    }

    // Sanitiza los datos en req.params
    if (req.params) {
        sanitizeObject(req.params);
    }

    next();
};