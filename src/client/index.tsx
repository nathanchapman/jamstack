import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import App from './components/App';

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: '/.netlify/functions/graphql',
});
const client = new ApolloClient({ cache, link });

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
