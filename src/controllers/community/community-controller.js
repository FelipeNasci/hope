const CommunityDatabaseMongo = require('../../infra/database/mongodb/adapters/community-database-mongodb');
const CommunityModel = require('../../domain/models/Community');

const create = async ({ name, ownerId }) => {
  try {
    const community = CommunityModel({
      name,
      owner: ownerId,
      members: [],
      posts: [],
    });

    const newCommunity = await CommunityDatabaseMongo.create(community);
    return newCommunity;
  } catch (error) {
      console.log(error)
    return error;
  }
};

module.exports = { create };
