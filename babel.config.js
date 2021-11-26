module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: 'Assets',
            rootPathSuffix: 'src/assets',
          },
          {
            rootPathPrefix: 'Components',
            rootPathSuffix: 'src/components',
          },
          {
            rootPathPrefix: 'Utils',
            rootPathSuffix: 'src/utils',
          },
        ],
      },
    ],
  ],
};
