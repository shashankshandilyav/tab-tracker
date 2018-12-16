const Joi = require('joi');
module.exports = {
  register: function(req, res, next) {
      const schema = {
        email: Joi.string().email(),
        password: Joi.string().regex(
          new RegExp('^[a-zA-Z0-9]{8,32}$')
        )
    }
    const {
      error,
      value
    } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            message: "You must provide a valid email address"
          })
          break
        case 'password':
          res.status(400).send({
            message: "Passwords donot match the standerds "
          })
          break
      }
    } else {
      next()
    }
  }
}