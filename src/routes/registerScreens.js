import { registerScreens } from 'react-native-navigation-register-screens';
import App from '~/App';

import AddHomeScreen from '~/screens/AddHomeScreen';
import AllChoresScreen from '~/screens/AllChoresScreen';
import HomeScreen from '~/screens/HomeScreen';
import HomeEntranceScreen from '~/screens/HomeEntranceScreen';
import LoginScreen from '~/screens/LoginScreen';
import OtherScreen from '~/screens/OtherScreen';

const screens = [
  AddHomeScreen,
  AllChoresScreen,
  HomeScreen,
  HomeEntranceScreen,
  LoginScreen,
  OtherScreen,
];

registerScreens(screens, App);
