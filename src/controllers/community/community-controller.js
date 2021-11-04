const CommunityDatabaseMongo = require('../../infra/database/mongodb/adapters/community-database-mongodb');
const CommunityModel = require('../../domain/models/Community');

const create = async ({ name, avatarUrl, ownerId }) => {
  try {
    const community = CommunityModel({
      name,
      avatarUrl,
      owner: ownerId,
      members: [],
      posts: [],
    });

    const newCommunity = await CommunityDatabaseMongo.create(community);
    return newCommunity;
  } catch (error) {
    return error;
  }
};

module.exports = { create };
