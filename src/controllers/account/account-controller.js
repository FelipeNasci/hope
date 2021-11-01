const AccountDatabaseMongo = require('../../infra/database/mongodb/adapters/account-database-mongodb');
const Authenticate = require('../../domain/use-cases/account/authentication');
const Auth = require('../../resources/services/token');
const Email = require('../../resources/services/email');
/**
 *
 * @param {AccountModel} account
 */

const signup = async account => {
  const newAccount = await AccountDatabaseMongo.create(account);

  Email.sendMail({
    to: newAccount.email,
    subject: 'Email recovery',
    text: 'Welcome to HOPE!. Your email was registered with us',
  });

  return accountAuthentication(newAccount);
};

/**
 *
 * @param {string} email
 * @param {string} password
 */

const login = async ({ email, password }) => {
  const account = await AccountDatabaseMongo.read({ email, password });
  if (!account) throw new Error('user not found');
  return accountAuthentication(account);
};

/**
 *
 * @param {string} email
 */

const recoverPassword = async ({ email }) => {
  const hashRecover = Math.floor(Math.random() * 1000) + 1000;

  const accountUpdated = await AccountDatabaseMongo.update(
    { email },
    { hashRecover },
  );

  Email.sendMail({
    to: email,
    subject: 'Email recovery',
    text: `Your code recovery is: ${hashRecover}`,
  });

  return !!accountUpdated;
};

/**
 *
 * @param {string} email
 * @param {string} password
 * @param {string} newPassword
 * @param {string} hashRecover
 */

const changePasswordWithHashCode = async ({
  email,
  newPassword,
  hashRecover,
}) => {
  const accountUpdated = await AccountDatabaseMongo.updateAndRemoveKey(
    { email, hashRecover },
    { password: newPassword },
    ['hashRecover'],
  );

  Email.sendMail({
    to: email,
    subject: 'Email recovery',
    text: 'You changed your password with success!',
  });

  return !!accountUpdated;
};

/**
 *
 * @param {Account} account
 */

const accountAuthentication = async account => {
  delete account.password;
  return Authenticate(account, Auth.generateToken);
};

module.exports = { signup, login, recoverPassword, changePasswordWithHashCode };
