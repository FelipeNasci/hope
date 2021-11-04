const CommunityMongodb = require('../models/community-model-mongodb');
const CommunityModel = require('../../../../domain/models/Community');

const CommunityDatabase = {
  /**
   *
   * @param {CommunityModel} community
   */

  async create(community) {
    try {
      const newCommunity = await CommunityMongodb.create(community);
      newCommunity.id = newCommunity._id;
      return CommunityModel(newCommunity);
    } catch (error) {
      console.log(error)
      throw { code: 500, error: 'server error' };
    }
  },
};

module.exports = CommunityDatabase;
