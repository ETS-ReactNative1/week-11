const crypto = require('crypto');

module.exports = function generateUniqueID() {
    return id = crypto.randomBytes(4).toString('HEX');
}
