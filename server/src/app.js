const express = require('express'),
  bodyparser = require('body-parser'),
  cors = require('cors'),
  morgan = require('morgan'),
  config = require('./config/config'),
  {
    sequelize
  } = require('./models');
const app = express();
app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(cors());

require('./routes/routes')

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 8081, () => {
      console.log(`Middlewear is active at port ${config.port}`)
    })
  });