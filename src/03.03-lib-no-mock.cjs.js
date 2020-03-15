const db = require('./03.03-db');

const keyPrefix = 'todos';
const makeKey = key => `${keyPrefix}:${key}`;

function getTodo(id) {
  return db.get(makeKey(id));
}

module.exports = {
  makeKey,
  getTodo
};
