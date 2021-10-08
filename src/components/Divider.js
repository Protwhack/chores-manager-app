import React from 'react';
// import { Divider } from 'react-native-elements';
import { View } from 'react-native';

const Divider = ({ height = 1, backgroundColor = '#BCBCBC' }) => {
  return (
    <View
      style={{
        height: height,
        backgroundColor: backgroundColor,
      }}
    />
  );
};

export default Divider;
