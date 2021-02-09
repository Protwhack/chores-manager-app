import { Navigation } from 'react-native-navigation';
import { getBottomStack } from './stack';

const rootNavigator = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          getBottomStack('Home', 'Calendar'),
          getBottomStack('Other', 'All Chores'),
        ],
      },
    },
  });
};

export default rootNavigator;
