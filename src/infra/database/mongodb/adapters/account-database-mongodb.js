const AccountMongodb = require('../models/account-model-mongodb');
const AccountModel = require('../../../../domain/models/Account');

const AccountDatabase = {
  async create(user) {
    try {
      return await AccountMongodb.create(user);
    } catch (error) {
      throw error;
    }
  },
  async read({ email }) {
    try {
      const account = await AccountMongodb.findOne({ email });

      if (!account) throw new Error()

      account.id = account._id;

      return AccountModel(account);
    } catch (error) {
      return undefined;
    }
  },
};

module.exports = AccountDatabase;
