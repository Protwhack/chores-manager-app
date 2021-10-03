import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Navigation } from 'react-native-navigation';
import { NavigationProvider, useNavigationButtonPress } from 'react-native-navigation-hooks';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CONFIG from '~/constants/envConfig';
import theme from '~/theme';
import { getNormalStack } from '~/routes/stack';

const client = new ApolloClient({
  uri: CONFIG.api,
  cache: new InMemoryCache(),
  connectToDevTools: CONFIG.env === 'development',
});

const App = Component => props => {
  useNavigationButtonPress(
    (e) => {
      switch(e.buttonId) {
        case 'logo':
          Navigation.mergeOptions('SideMenu', {
            sideMenu: {
              left: {
                visible: true,
              }
            }
          });
          break;
      }
    },
    { componentId: props.componentId }
  );

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NavigationProvider value={{ componentId: props.componentId }}>
          <SafeAreaProvider>
            <Component {...props} />
          </SafeAreaProvider>
        </NavigationProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
