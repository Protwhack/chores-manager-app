import { registerScreens } from 'react-native-navigation-register-screens';
import App from '~/App';

import AddHomeScreen from '~/screens/AddHomeScreen';
import AllChoresScreen from '~/screens/AllChoresScreen';
import CalendarScreen from '~/screens/CalendarScreen';
import HomeEntranceScreen from '~/screens/HomeEntranceScreen';
import LoginScreen from '~/screens/LoginScreen';
import OtherScreen from '~/screens/OtherScreen';
import SelectSpaceScreen from '~/screens/SelectSpaceScreen';
import SideMenuScreen from '~/screens/SideMenuScreen';
import ExampleScreen from '~/screens/ExampleScreen';

const screens = [
  AddHomeScreen,
  AllChoresScreen,
  CalendarScreen,
  HomeEntranceScreen,
  LoginScreen,
  OtherScreen,
  SelectSpaceScreen,
  SideMenuScreen,
  ExampleScreen,
];

registerScreens(screens, App);
