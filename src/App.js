import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MainScreen from '~/screens/MainScreen';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <MainScreen />
  </ApolloProvider>
);

export default App;
