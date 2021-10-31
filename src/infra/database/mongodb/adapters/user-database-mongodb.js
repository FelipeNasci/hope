const UserMongodb = require('../models/users-model-mongodb');

const UsersDatabases = {
  async create(user) {
    try {
      return await UserMongodb.create(user);
    } catch (error) {
      throw error;
    }
  },
};

module.exports = UsersDatabases;
