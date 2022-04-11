const express = require('express')
const app = express()
const port = process.env.PORT || 8000

require('dotenv').config({path: '.env'})

const { graphql } = require('@octokit/graphql')
const graphqlAuth = graphql.defaults({
  headers: { authorization: 'token ' + process.env.API_KEY },
})

const {
  API_KEY
} = process.env

app.set('view engine', 'ejs')

app.set('views', 'views')

app.use(express.static('static'))

app.get("/", (req, res) => {
  graphqlAuth(`query {
  repositoryOwner(login: "cmda-minor-web") {
    repository(name: "css-to-the-rescue-2122") {
      forks(first: 100) {
        edges {
          node {
            owner {
              avatarUrl
              login
            }
          }
        }
      }
    }
  }
}`).then((data) => {
    console.log(data.repositoryOwner.repository.forks.edges)
    res.render('index', {
      projects: data.repositoryOwner.repository.forks.edges,
    })
  })
})

// Offline page
app.get('/offline', (req, res) => {
  res.render("offline", {
    title: "You are Offline"
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})