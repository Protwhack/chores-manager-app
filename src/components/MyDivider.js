import React from 'react';
import { View } from 'react-native';

const MyDivider = ({ width = 1, color = '#BCBCBC' }) => {
  return (
    <View
      style={{
        height: width,
        backgroundColor: color,        
      }}
    />
  );
};

export default MyDivider;
