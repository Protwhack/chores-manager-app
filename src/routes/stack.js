export const getBottomStack = (name, title, icon) => ({
  stack: {
    children: [
      {
        component: {
          name,
          options: {
            topBar: {
              visible: true,
              title: { text: title },
            },
          },
        },
      },
    ],
    options: {
      bottomTab: {
        text: title,
        // icon, //NEED_IMAGE
      },
    },
  },
});

export const getNormalStack = (name, title) => ({
  component: {
    name,
    options: {
      topBar: {
        visible: true,
        title: {
          text: title,
        },
      },
    },
  },
});
