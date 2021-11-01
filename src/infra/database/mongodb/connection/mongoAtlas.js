const { connect, connection } = require('mongoose');

const { url, options } = require('../../../../resources/configs/mongodb');

connect(url, options);

let mongodb;

try {
  mongodb = connection;
  mongodb.on('error', console.error.bind(console, 'connection error:'));
  mongodb.once('open', () => console.log('MongoDB Connected'));
} catch (err) {
  throw err;
}

module.exports = mongodb;
