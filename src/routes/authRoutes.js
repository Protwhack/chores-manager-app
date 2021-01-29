import { Navigation } from 'react-native-navigation';
import { getBottomStack } from './stack';

const rootNavigator = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          getBottomStack('Home', 'Home'),
          getBottomStack('Other', 'Other'),
        ],
      },
    },
  });
};

export default rootNavigator;
