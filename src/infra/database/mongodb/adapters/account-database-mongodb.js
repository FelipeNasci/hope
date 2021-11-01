const AccountMongodb = require('../models/account-model-mongodb');
const AccountModel = require('../../../../domain/models/Account');

const AccountDatabase = {
  
  async create(user) {
    try {
      const account = await AccountMongodb.create(user);
      account.id = account._id;
      return AccountModel(account);
    } catch (error) {
      return undefined;
    }
  },

  async read({ email }) {
    try {
      const account = await AccountMongodb.findOne({ email });

      if (!account) throw new Error();

      account.id = account._id;

      return AccountModel(account);
    } catch (error) {
      return undefined;
    }
  },
};

module.exports = AccountDatabase;
