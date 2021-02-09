import { Navigation } from 'react-native-navigation';
import { getNormalStack } from './stack';

const noAuthRoute = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [getNormalStack('HomeEntrance', 'Entrance')],
      },
    },
  });
};

export default noAuthRoute;
