const AccountMongodb = require('../models/account-model-mongodb');

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
      return await AccountMongodb.findOne({ email });
    } catch (error) {
      throw error;
    }
  },
};

module.exports = AccountDatabase;
