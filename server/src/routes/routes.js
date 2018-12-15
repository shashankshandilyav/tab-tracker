module.exports = (app) => {
  app.post('/register', (req, res) => {
    console.log("Getting request")
    res.send({
      message: `hello ${req.body.email} how are you doing?`
    })
  })
}