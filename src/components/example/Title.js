import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { normalize } from '~/utils/styling';

const Title = props => (
  <View>
    <Text style={styles.title}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: normalize(20),
  },
});

export default Title;
