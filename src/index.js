// The primary purpose of creating a backend app here is to protect the Github API Token
// If we load the Github API token in the React Front-End App, it would be leaked in the browser
// when making API calls, hence such information should be handled by the backend

require('dotenv').config()
const { GraphQLClient, gql } = require('graphql-request');
const Bundler = require('parcel');
const express = require('express');
const Path = require('path');

const {PORT = 3000, REACT_APP_GITHUB_API_TOKEN} = process.env;
const entryFiles = Path.join(`${__dirname}/_main`, './index.html');
const bundler = new Bundler(entryFiles, {
  // Don't cache anything in development 
  cache: false,
});

// Ideally we would have a GraphQL Server with all schema's established
// However since we are using a third-party API such as Github
// I think its okay to use the GraphQL client to make the API calls
function getGraphQLClient() {
  const endpoint = 'https://api.github.com/graphql'

  return new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${REACT_APP_GITHUB_API_TOKEN}`,
    },
  })
}

// Creating express app
const app = express();

// Establishing route for topic terms
app.get('/api/topic/:topicTerm', (req, res)=>{
  // GraphQL query
  const query = gql`
    query ($term: String!){
      topic (name: $term){
          name
          relatedTopics (first: 10){
              name,
              stargazerCount
          }
          stargazerCount
      }
    }
  `
  // GraphQL variables
  const variables = {
    term: req.params.topicTerm
  }

  graphQLClient = getGraphQLClient()

  // Request made via GraphQL client
  graphQLClient.request(
    query,
    variables,
  )
    .then((data) => res.send(data))
    .catch((e)=> res.send(e))
})

// Pass the Parcel bundler into Express as middleware
// This runs the React Bundler Parcel and builds the project
// Since this is used as a middleware in express, the react routing
// will also work
app.use(bundler.middleware());

// Run your Express server
app.listen(PORT);