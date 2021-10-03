import { Navigation } from 'react-native-navigation';
import { getPlainScreenOptions, getNormalStack } from './stack';

const noAuthRoute = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          getPlainScreenOptions('Login', 'Login'),
        ],
      },
    },
  });
};

export default noAuthRoute;
