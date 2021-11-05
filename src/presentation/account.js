const AccountController = require('../controllers/account/account-controller');
const AccountModel = require('../domain/models/Account');

/**
 *
 * @param {string} email
 * @param {string} password
 * @param {string} accountType
 * @returns
 */
const signup = async ({ email, password, accountType }) => {
  try {
    const account = await AccountController.signup(
      AccountModel({
        email,
        password,
        accountType,
      }),
    );
    return { code: 201, data: account };
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns
 */
const login = async ({ email, password }) => {
  try {
    const account = await AccountController.login({ email, password });
    return { code: 200, data: account };
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {string} email
 * @returns
 */
const recoverPassword = async ({ email }) => {
  try {
    const account = await AccountController.recoverPassword({ email });
    return { code: 200, data: account };
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {string} email
 * @param {string} newPassword
 * @param {string} hashRecover
 * @returns
 */
const changePasswordWithHashCode = async ({
  email,
  newPassword,
  hashRecover,
}) => {
  try {
    const account = await AccountController.changePasswordWithHashCode({
      email,
      newPassword,
      hashRecover,
    });
    return { code: 200, data: account };
  } catch (error) {
    return error;
  }
};

module.exports = {
  signup,
  login,
  recoverPassword,
  changePasswordWithHashCode,
};
