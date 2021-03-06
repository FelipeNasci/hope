const AccountMongodb = require('../models/account-model-mongodb');
const AccountModel = require('../../../../domain/models/Account');

const AccountDatabase = {
  /**
   *
   * @param {AccountModel} account
   */

  async create(account) {
    try {
      const newAccount = await AccountMongodb.create(account);
      newAccount.id = newAccount._id;
      return AccountModel(newAccount);
    } catch (error) {
      switch (error.code) {
        case 11000:
          throw { code: 403, data: { error: 'user already exists' } };
        default:
          throw { code: 500, data: { error: 'server error' } };
      }
    }
  },

  /**
   *
   * @param {AccountModel} filter
   */

  async read(filter) {
    try {
      const account = await AccountMongodb.findOne(filter);

      if (!account) return undefined;

      account.id = account._id;

      return AccountModel(account);
    } catch (error) {
      return { code: 500, data: { error: 'server error' } };
    }
  },

  /**
   *
   * @param {AccountModel} filter
   * @param {AccountModel} data
   */

  async update(filter, data) {
    try {
      const accountUpdated = await AccountMongodb.findOneAndUpdate(
        filter,
        data,
      );

      if (!accountUpdated)
        throw { code: 404, data: { error: 'user not found' } };

      accountUpdated.id = accountUpdated._id;

      return AccountModel(accountUpdated);
    } catch (error) {
      switch (error.code) {
        case 404:
          throw error;
        default:
          throw { code: 500, data: { error: 'server error' } };
      }
    }
  },

  /**
   *
   * @param {AccountModel} filter
   * @param {AccountModel} data
   * @param {string[]} accountKeys
   */

  async updateAndRemoveKey(filter, data, accountKeys) {
    try {
      let keys = {};
      accountKeys.forEach(key => (keys = { ...keys, [key]: 1 }));

      const accountUpdated = await AccountMongodb.findOneAndUpdate(filter, {
        ...data,
        $unset: keys,
      });

      if (!accountUpdated)
        throw { code: 404, data: { error: 'user or recovery code not found' } };

      accountUpdated.id = accountUpdated._id;

      return AccountModel(accountUpdated);
    } catch (error) {
      switch (error.code) {
        case 404:
          throw error;
        default:
          throw { code: 500, data: { error: 'server error' } };
      }
    }
  },
};

module.exports = AccountDatabase;
