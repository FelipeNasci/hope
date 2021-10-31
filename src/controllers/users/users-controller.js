/**
 *
 * @param {User} user
 */


const UserDatabaseMongo = require('../../infra/database/mongodb/adapters/user-database-mongodb')

const signUp = async user => {
  return UserDatabaseMongo.create(user)
};

module.exports = { signUp };
