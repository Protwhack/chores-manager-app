import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { NavigationProvider } from 'react-native-navigation-hooks';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CONFIG from '~/constants/envConfig';
import theme from '~/theme';

const client = new ApolloClient({
  uri: CONFIG.api,
  cache: new InMemoryCache(),
  connectToDevTools: CONFIG.env === 'development',
});

const App = Component => props => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <NavigationProvider value={{ componentId: props.componentId }}>
        <Component {...props} />
      </NavigationProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
