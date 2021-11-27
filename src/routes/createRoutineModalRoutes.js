import { Navigation } from 'react-native-navigation';
import { getComponentWithModalTopBar } from './stack';
import { TOP_BAR_ICON_SIZE } from '~/constants/dimensions';
import { getIconAsync } from '~/utils/imageService';
import theme from '~/theme';

const stepScreens = [
  {
    name: 'SelectSpace',
  },
];

const createRoutineModalRoutes = title => {
  getIconAsync({
    type: 'feather',
    name: 'x',
    size: TOP_BAR_ICON_SIZE,
    color: theme.colors.primary,
  }).then(closeIcon =>
    Navigation.showModal({
      stack: {
        children: stepScreens.map(screen => ({
          component: getComponentWithModalTopBar(
            screen.name,
            screen.name,
            closeIcon
          ),
        })),
      },
    })
  );
};

export default createRoutineModalRoutes;
