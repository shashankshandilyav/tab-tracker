const express = require('express'),
  bodyparser = require('body-parser'),
  cors = require('cors'),
  morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(cors());

app.post('/register', (req, res) => {
  console.log("Getting request")
  res.send({
    message: `hello ${req.body.email} how are you doing?`
  })
})

app.listen(process.env.PORT || 8081,() => {
  console.log("Middlewear is active at port 8081")
})