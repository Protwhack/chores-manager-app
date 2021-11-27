import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { normalize } from 'Utils/styling';

const Head = item => {
  return (
    <View pointerEvents='none'>
      <Tile
        containerStyle={styles.container}
        titleStyle={styles.title}
        imageSrc={{ uri: item.imageUrl }}
        title={item.name}
        height={normalize(120)}
        featured
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  title: {
    color: 'black',
    fontSize: normalize(18),
  },
});

export default Head;
