const AccountDatabaseMongo = require('../../infra/database/mongodb/adapters/account-database-mongodb');
/**
 *
 * @param {User} user
 */

const signup = async user => {
  return AccountDatabaseMongo.create(user);
};

/**
 *
 * @param {string} email
 * @param {string} password
 */

const login = async ({ email, password }) => {
  console.log({ email, password })
  return AccountDatabaseMongo.read({ email, password });
};

module.exports = { signup, login };
