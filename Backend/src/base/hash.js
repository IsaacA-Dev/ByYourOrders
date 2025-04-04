//hash.js
const config = require('../config');
const bcrypt = require('bcryptjs');

const hash = async (password) => {
    const salt = await bcrypt.genSalt(config.bcrypt.saltRounds);
    return await bcrypt.hash(password, salt);
};

module.exports = {
    hash
};


