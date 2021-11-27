import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '~/components/Title';
import SpacePicker from '~/components/SpacePicker';
import { normalize } from '~/utils/styling';

const SelectSpaceScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Select a Living Space</Title>
      <SpacePicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: normalize(37),
    paddingRight: normalize(37),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

SelectSpaceScreen.screenName = 'SelectSpace';

export default SelectSpaceScreen;
