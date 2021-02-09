import { Navigation } from 'react-native-navigation';
import { getBottomStack } from './stack';

const authRoutes = title => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          getBottomStack('Home', 'Calendar', `${title}'s House`),
          getBottomStack('AllChores', 'All Chores', `${title}'s House`),
          getBottomStack('Other', 'More', `${title}'s House`),
        ],
      },
    },
  });
};

export default authRoutes;
