import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { normalize } from '~/utils/styling';

const Title = ({ containerStyle, fontStyle, children }) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <Text style={{ ...styles.text, ...fontStyle }}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(88),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: normalize(18),
  },
});

export default Title;
