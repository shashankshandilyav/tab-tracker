
const AuthenticationController = require('../controller/authenticationController')

module.exports = (app) => {
  app.post('/register',AuthenticationController.register)
}