const crypto = require('crypto');

module.exports = function enerateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
}