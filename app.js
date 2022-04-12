require('dotenv').config()
const express = require('express')
const indexRoute = require('./routes/index')
const app = express()
//const projectsRoute = require('./routes/projects')
const leaderBoardRoute = require('./routes/leaderboard')

const PORT = process.env.PORT || 8000

module.exports = 
  app.set('view engine', 'ejs')
  app.set('views', './views')

  app.use(express.static('./public'))

  app.use('/', indexRoute)
  app.use('/leaderboard', leaderBoardRoute)
  //.use('/projects', projectsRoute)


  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
  