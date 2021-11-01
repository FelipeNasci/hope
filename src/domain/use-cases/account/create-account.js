const AccountModel = require('../../models/Account');

const CreateAccount = async (accountModel, repositoryInstance) => {
  const { email } = accountModel;
  const existAccount = await repositoryInstance.read({ email });

  if (existAccount)
    throw new Error({
      source: 'controller - singUp',
      message: 'user already exist',
    });

  const account = await repositoryInstance.create(accountModel);

  return AccountModel(account);
};

module.exports = CreateAccount;
