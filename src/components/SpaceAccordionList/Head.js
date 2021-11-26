import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { normalize, SCREEN_WIDTH } from 'Utils/styling';

const Head = item => {
  return (
    <View pointerEvents='none'>
      <Tile
        containerStyle={styles.container}
        titleStyle={styles.title}
        imageSrc={{ uri: item.imageUrl }}
        title={item.name}
        height={SCREEN_WIDTH * 0.32}
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

Head.screenName = 'Head';

export default Head;
