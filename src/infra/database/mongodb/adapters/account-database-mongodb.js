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

  async read(filter) {
    try {
      const account = await AccountMongodb.findOne(filter);

      if (!account) return undefined;

      account.id = account._id;

      return AccountModel(account);
    } catch (error) {
      return undefined;
    }
  },

  async update(filter, data) {
    try {
      const accountUpdated = await AccountMongodb.findOneAndUpdate(
        filter,
        data,
      );

      if (!accountUpdated) throw new Error('user not found');

      accountUpdated.id = accountUpdated._id;

      return AccountModel(accountUpdated);
    } catch (error) {
      console.log(error);
      return undefined;
    }
  },
};

module.exports = AccountDatabase;
