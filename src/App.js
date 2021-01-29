import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CONFIG from '~/constants/envConfig';
import MainScreen from '~/screens/MainScreen';
import theme from '~/theme';

const client = new ApolloClient({
  uri: CONFIG.api,
  cache: new InMemoryCache(),
  connectToDevTools: CONFIG.env === 'development',
});

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <MainScreen />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
