const CommunityDatabaseMongo = require('../../infra/database/mongodb/adapters/community-database-mongodb');
const CommunityModel = require('../../domain/models/Community');

/**
 *
 * @param {String} name : ;
 * @param {String} avatarUrl : ;
 * @param {String} ownerId : ;
 * @returns CommunityModel[]
 */

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

/**
 *
 * @param {String} CommunityId : ;
 * @returns CommunityModel
 */

const read = async CommunityId => {
  try {
    const community = await CommunityDatabaseMongo.read(CommunityId);

    if (!community) throw { code: 404, data: { error: 'community not found' } };

    return community;
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {CommunityModel} filter : ;
 * @returns CommunityModel[]
 */

const list = async filter => {
  try {
    const communities = await CommunityDatabaseMongo.list(filter);
    return communities;
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {CommunityModel} filter : ;
 * @returns CommunityModel[]
 */

const addNewMember = async (communityId, account) => {
  try {
    const communities = await CommunityDatabaseMongo.updateArray(
      communityId,
      'members',
      account,
    );
    return { status: !!communities };
  } catch (error) {
    return error;
  }
};

module.exports = { create, read, list, addNewMember };
