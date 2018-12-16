const {
  User
} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config.js')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.secret,{
    expiresIn : ONE_WEEK
  })
}
module.exports = {
  register: async function (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: `This email already existed${err.message}`
      })
    }
  },
  login: async function (req, res, next) {
    try {
      const {
        email,
        password
      } = req.body
      const user = await User.findOne({
        where: {
          email: email,
        }
      })
      if (!user) {
        return res.status(403).send({
          message: "User information is incorrect please check your email or password"
        })
      }
      const isPasswordValid = password === await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(403).send({
          message: "User information is incorrect please check your email or password"
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to login'
      })
    }
  }
}