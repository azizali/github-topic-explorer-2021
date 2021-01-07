require('dotenv').config()
const { GraphQLClient, gql } = require('graphql-request');
const { createProxyMiddleware } = require('http-proxy-middleware');
const Bundler = require('parcel');
const express = require('express');
const Path = require('path');

const entryFiles = Path.join(`${__dirname}/_main`, './index.html');
const bundler = new Bundler(entryFiles, {
  // Don't cache anything in development 
  cache: false,
});

// const API_URL= 'https://api.github.com'
const API_URL= 'http://localhost:9000'
const app = express();
const PORT = process.env.PORT || 3000;
console.log('process', process.env)
const REACT_APP_GITHUB_API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN || 3000;

// This route structure is specifc to Netlify functions, so 
// if you're setting this up for a non-Netlify project, just use
// whatever values make sense to you.  Probably something like /api/**

// app.use(
//   '/api/graphql/',
//   createProxyMiddleware({
//     target: API_URL,
//     // Your production routes
//     pathRewrite: {
//       '/api/graphql': '/src',
//     },
//   })
// );

// app.use(
//   '/api/graphql/',
//   createProxyMiddleware({
//     target: 'http://localhost:3000',
//     // target: 'https://api.github.com',
//     // Your production routes
//     pathRewrite: {
//       '/api/graphql': '/graphql',
//     },
//     // secure: false,
//   })
// );

function getGraphQLClient() {
  const endpoint = 'https://api.github.com/graphql'

  return new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer db5ff62bd6e0d38374ab10332721cc4471c855e0',
    },
  })
}

app.post('/graphql', (req, res, next)=>{
  console.log('graphql', req.body)
  const query = gql`
    query ($term: String!){
      topic (name: $term){
          name
          relatedTopics (first: 10){
              name
          }
          stargazerCount
      }
    }
  `
  const variables = {
    "term": "react"
  }

  const requestHeaders = {
    authorization: `bearer ${REACT_APP_GITHUB_API_TOKEN}`,
    accept: 'application/vnd.github.v4.idl'
  }

  graphQLClient = getGraphQLClient()

  graphQLClient.request(
    query,
    variables,
    requestHeaders
  )
    .then((data) => res.send({data: data}))
    .catch((e)=> res.send(e))
})

app.get('/api/topic/:topicTerm', (req, res, next)=>{
  console.log('graphql', req.body)
  const query = gql`
    query ($term: String!){
      topic (name: $term){
          name
          relatedTopics (first: 10){
              name
          }
          stargazerCount
      }
    }
  `
  const variables = {
    term: req.params.topicTerm
  }

  const requestHeaders = {
    authorization: 'Bearer db5ff62bd6e0d38374ab10332721cc4471c855e0',
    accept: 'application/vnd.github.v4.idl'
  }

  graphQLClient = getGraphQLClient()

  graphQLClient.request(
    query,
    variables,
    requestHeaders
  )
    .then((data) => res.send({data: data}))
    .catch((e)=> res.send(e))
})

// Pass the Parcel bundler into Express as middleware
app.use(bundler.middleware());

// Run your Express server
app.listen(PORT);