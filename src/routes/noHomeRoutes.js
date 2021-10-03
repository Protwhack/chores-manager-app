import { Navigation } from 'react-native-navigation';
import { getPlainScreenOptions } from './stack';

const noAuthRoute = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [getPlainScreenOptions('HomeEntrance', 'Entrance')],
      },
    },
  });
};

export default noAuthRoute;
