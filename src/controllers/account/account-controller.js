const AccountDatabaseMongo = require('../../infra/database/mongodb/adapters/account-database-mongodb');
const Authenticate = require('../../domain/use-cases/account/authentication');
const Auth = require('../../resources/services/token');

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
  const account = await AccountDatabaseMongo.read({ email, password });
  return Authenticate(account, Auth.generateToken)
};

module.exports = { signup, login };
