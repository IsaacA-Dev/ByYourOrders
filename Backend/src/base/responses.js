exports.success = function (req, res, message, status) {
    let statusCode = status || 200;
    let statusMessage = message || '';
    let response = {
        error: false,
        status: statusCode,
        message: statusMessage,
    };
    res.status(statusCode).send(response);
};

exports.error = function (req, res, message, status) {
    let statusCode = status || 500;
    let statusMessage = message || '';
    let response = {
        error: true,
        status: statusCode,
        message: statusMessage,
    };
    res.status(statusCode).send(response);
};

exports.fail = function (req, res, message, status) {
    let statusCode = status || 400;
    let statusMessage = message || '';
    let response = {
        error: true,
        status: statusCode,
        message: statusMessage,
    };
    res.status(statusCode).send(response);
};

exports.empty = function (req, res) {
    let response = {};
    res.status(200).send(response);
};