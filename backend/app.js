// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const schema = buildSchema(`
  type Query {
    message: String
  }
  type Mutation {
    login(username: String!, password: String!): String
  }
`);

const root = {
    message: () => 'message',
    login: ({ username, password }) => {
      if (username === 'example' && password === 'password') {
        return 'Authentication successful';
      } else {
        return 'Authentication failed';
      }
    }
  };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }));
  
  app.listen(3000);
