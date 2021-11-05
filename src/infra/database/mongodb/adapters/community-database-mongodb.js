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
      throw { code: 500, error: 'server error' };
    }
  },

  /**
   *
   * @param {CommunityModel} community
   */

  async read(communityId) {
    try {
      const community = await CommunityMongodb.findById(communityId);

      if (!community)
        return CommunityModel({
          id: '',
          name: '',
          avatarUrl: '',
          owner: '',
          members: '',
          posts: '',
          created: '',
        });

      community.id = community._id;
      return CommunityModel(community);
    } catch (error) {
      throw { code: 500, error: 'server error' };
    }
  },

  /**
   *
   * @param {CommunityModel} community
   */

  async list(filter) {
    try {
      const communities = await CommunityMongodb.find(filter);
      return communities.map(community => CommunityModel(community));
    } catch (error) {
      throw { code: 500, error: 'server error' };
    }
  },

  /**
   *
   * @param {CommunityModel} community
   */

  async updateArray(collectionId, attribute, data) {
    try {
      const community = await CommunityMongodb.findByIdAndUpdate(collectionId, {
        $push: { [attribute]: data },
      });

      if (!community) throw { code: 404, error: 'community not found' };

      return true;
    } catch (error) {
      throw error.code ? error : { code: 500, error: 'server error' };
    }
  },
};

module.exports = CommunityDatabase;
