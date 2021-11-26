import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

const Body = item => {
  return (
    <View>
      <Text>Chores: {JSON.stringify(item.chores)}</Text>
    </View>
  );
};

Body.screenName = 'Body';

export default Body;
