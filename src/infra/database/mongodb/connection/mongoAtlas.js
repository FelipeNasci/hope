const { set, connect, connection } = require('mongoose');

const { url, options } = require('../../../../resourses/configs/mongodb');

// set('useCreateIndex', true);
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
