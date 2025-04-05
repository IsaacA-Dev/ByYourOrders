const config = require('../config');
const bcrypt = require('bcryptjs');

const hash = async (password) => {
    try {
        const salt = await bcrypt.genSalt(config.bcrypt.saltRounds);
        return await bcrypt.hash(password, salt);
    } catch (err) {
        console.error("Error hashing password:", err);
        throw err;
    }
};


module.exports = {
    hash
};
