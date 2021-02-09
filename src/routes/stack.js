const getComponent = (name, title, options = {}) => ({
  name,
  options: {
    topBar: {
      visible: true,
      title: { text: title },
    },
    ...options,
  },
});

export const getBottomStack = (name, tabName, title, icon) => ({
  stack: {
    children: [
      {
        component: getComponent(name, title),
      },
    ],
    options: {
      bottomTab: {
        text: tabName,
        // icon, //NEED_IMAGE
      },
    },
  },
});

export const getNormalStack = (name, title) => ({
  component: getComponent(name, title),
});
