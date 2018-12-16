
const AuthenticationController = require('../controller/authenticationController')
const AuthenticationPolicy = require('../policy/authenticationPolicy')
module.exports = (app) => {
  app.post('/register',AuthenticationPolicy.register, AuthenticationController.register)
  app.post('/login', AuthenticationController.login)
}