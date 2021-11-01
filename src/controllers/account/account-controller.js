const AccountDatabaseMongo = require('../../infra/database/mongodb/adapters/account-database-mongodb');
const Authenticate = require('../../domain/use-cases/account/authentication');
const Auth = require('../../resources/services/token');

/**
 *
 * @param {Account} account
 */

const signup = async account => {
  const newAccount = await AccountDatabaseMongo.create(account);
  return accountAuthentication(newAccount);
};

/**
 *
 * @param {string} email
 * @param {string} password
 */

const login = async ({ email, password }) => {
  const account = await AccountDatabaseMongo.read({ email, password });
  return accountAuthentication(account);
};

/**
 *
 * @param {Account} account
 */

const accountAuthentication = async account => {
  delete account.password;
  return Authenticate(account, Auth.generateToken);
};

module.exports = { signup, login };
