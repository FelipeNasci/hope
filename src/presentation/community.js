const CommunityController = require('../controllers/community/community-controller');

/**
 *
 * @param {string} name
 * @param {string} ownerId
 */
const create = async ({ name, ownerId }) => {
  try {
    const community = await CommunityController.create({ name, ownerId });
    return { code: 201, data: community };
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {string} id
 * @returns
 */
const read = async ({ id }) => {
  try {
    const account = await CommunityController.read(id);
    return { code: 200, data: account };
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {string} email
 * @returns
 */
const list = async ({ name }) => {
  try {
    const communities = await CommunityController.list(
      name ? { name } : undefined,
    );
    return { code: 200, data: communities };
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {string} email
 * @param {string} newPassword
 * @param {string} hashRecover
 * @returns
 */
const addNewMember = async (communityId, { id }) => {
  try {
    const success = await CommunityController.addNewMember(communityId, {
      id,
    });
    return { code: 200, data: success };
  } catch (error) {
    return error;
  }
};

module.exports = {
  create,
  read,
  list,
  addNewMember,
};
