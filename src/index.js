require('dotenv').config();
require('./infra/database/mongodb/connection/mongoAtlas');
const {port} = require('./resources/configs/deploy');

const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  try {
    console.log('Server Active in port ' + port);
  } catch (error) {
    console.log('Crached Server with error  ' + error);
  }
});
