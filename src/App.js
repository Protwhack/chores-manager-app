import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MainScreen from '~/screens/MainScreen';
import theme from '~/theme';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <MainScreen />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
