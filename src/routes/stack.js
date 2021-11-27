import logoIcon from 'Assets/header-logo.png';
import theme from '~/theme';
import { isAndroid } from '~/utils/deviceInfo';

const getComponentWithoutTopBar = (name, options = {}) => ({
  id: name + (options.id ? `-${options.id}` : ''),
  name,
  options: {
    topBar: {
      visible: false,
    },
    ...options,
  },
});

const getComponentWithTopBar = (name, title, options = {}) => ({
  id: name + (options.id ? `-${options.id}` : ''),
  name,
  options: {
    topBar: {
      visible: true,
      title: {
        text: title,
        alignment: 'center',
      },
      leftButtons: [
        {
          id: 'logo',
          icon: logoIcon,
        },
      ],
      // rightButtons: [
      //   {
      //     id: 'example',
      //     text: 'Example',
      //     showAsAction: 'never',
      //   }
      // ],
    },
    ...options,
  },
});

export const getComponentWithModalTopBar = (
  name,
  title,
  closeIcon,
  options = {}
) => ({
  id: name + (options.id ? `-${options.id}` : ''),
  name,
  options: {
    topBar: {
      visible: true,
      showIcon: true,
      leftButtons: [
        {
          id: 'closeModal',
          icon: closeIcon,
        },
      ],
      leftButtonColor: theme.colors.primary,
      background: {
        color: isAndroid && theme.colors.android.background,
      },
      noBorder: true,
      borderHeight: 0,
      elevation: 0,
    },
    ...options,
  },
});

export const getBottomStack = ({
  name,
  tabName,
  title,
  icon,
  selectedIcon,
}) => ({
  stack: {
    children: [
      {
        component: getComponentWithTopBar(name, title),
      },
    ],
    options: {
      bottomTab: {
        text: tabName,
        icon,
        selectedIcon,
      },
      bottomTabs: {
        titleDisplayMode: 'alwaysShow',
      },
    },
  },
});

export const getNormalStack = (name, title) => ({
  component: getComponentWithTopBar(name, title),
});

export const getPlainScreenOptions = name => ({
  component: getComponentWithoutTopBar(name),
});
