import { Navigation } from 'react-native-navigation';
import { getBottomStack, getPlainScreenOptions } from './stack';
import calendarActiveIcon from 'Assets/tab-calendar-active.png';
import calendarInactiveIcon from 'Assets/tab-calendar-inactive.png';

const bottomTabs = [
  {
    name: 'Home',
    tabName: 'Calendar',
    icon: calendarInactiveIcon,
    selectedIcon: calendarActiveIcon,
  },
  {
    name: 'AllChores',
    tabName: 'All Chores',
    icon: calendarInactiveIcon,
    selectedIcon: calendarActiveIcon,
  },
  {
    name: 'Example',
    tabName: 'Example',
    icon: calendarInactiveIcon,
    selectedIcon: calendarActiveIcon,
  },
];

const authRoutes = title => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: getPlainScreenOptions('SideMenu', 'SideMenu'),
        center: {
          bottomTabs: {
            children: [
              ...bottomTabs.map(tab => getBottomStack({...tab, title: `${title}'s House`}))
            ],
          },
        },
      },
    },
  });
};

export default authRoutes;
