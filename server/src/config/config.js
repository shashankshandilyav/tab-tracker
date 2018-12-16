module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'nischaya-matrimony_test',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'shandi',
  },
  authentication:{
    secret: process.env.JWT_SECRET || '$ecreT'
  }
}