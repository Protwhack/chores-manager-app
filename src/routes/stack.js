import logoIcon from 'Assets/header-logo.png';

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
