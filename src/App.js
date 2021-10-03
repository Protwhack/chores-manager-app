/* eslint-disable react-hooks/rules-of-hooks */
import Realm from 'realm';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import {
  NavigationProvider,
  useNavigationButtonPress,
} from 'react-native-navigation-hooks';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import CONFIG from '~/constants/envConfig';
import theme from '~/theme';

const app = new Realm.App({
  id: CONFIG.realm.appId,
  timeout: 10000,
});

// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user. The logged in user will have a valid
    // access token.
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    // An already logged in user's access token might be stale. To guarantee that the token is
    // valid, we refresh the user's custom data which also refreshes their access token.
    await app.currentUser.refreshCustomData();
  }
  return app.currentUser.accessToken;
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: CONFIG.api,
    // We define a custom fetch handler for the Apollo client that lets us authenticate GraphQL requests.
    // The function intercepts every Apollo HTTP request and adds an Authorization header with a valid
    // access token before sending the request.
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
  connectToDevTools: CONFIG.env === 'development',
});

const App = Component => props => {
  useNavigationButtonPress(
    e => {
      switch (e.buttonId) {
        case 'logo':
          Navigation.mergeOptions('SideMenu', {
            sideMenu: {
              left: {
                visible: true,
              },
            },
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
