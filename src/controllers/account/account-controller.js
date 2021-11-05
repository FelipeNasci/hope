const AccountDatabaseMongo = require('../../infra/database/mongodb/adapters/account-database-mongodb');
const Authenticate = require('../../domain/use-cases/account/authentication');
const Auth = require('../../resources/services/token');
const Email = require('../../resources/services/email');
/**
 *
 * @param {AccountModel} account
 */

const signup = async account => {
  try {
    const newAccount = await AccountDatabaseMongo.create(account);

    Email.sendMail({
      to: newAccount.email,
      subject: 'Subscription',
      text: 'Welcome to HOPE!. Your email was registered with us',
    });

    return await accountAuthentication(newAccount);
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {string} email
 * @param {string} password
 */

const login = async ({ email, password }) => {
  try {
    const account = await AccountDatabaseMongo.read({ email, password });
    if (!account)
      throw { code: 404, data: { error: 'email or password invalid' } };
    return accountAuthentication(account);
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {string} email
 */

const recoverPassword = async ({ email }) => {
  try {
    console.log(email)
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

    return { success: !!accountUpdated };
  } catch (error) {
    throw error;
  }
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
  try {
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

    return { success: !!accountUpdated };
  } catch (error) {
    throw error;
  }
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
