import { registerScreens } from 'react-native-navigation-register-screens';
import App from '~/App';

import HomeScreen from '~/screens/HomeScreen';
import LoginScreen from '~/screens/LoginScreen';
import OtherScreen from '~/screens/OtherScreen';

registerScreens([HomeScreen, LoginScreen, OtherScreen], App);
