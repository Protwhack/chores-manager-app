import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Label from './Label';

const LabelContainer = ({ items, labelTextColor, labelBackgroundColor }) => {
  return (
    <View style={styles.labelContainer}>
      <FlatList
        columnWrapperStyle={styles.flatList}
        numColumns={10}
        data={items}
        renderItem={({ item }) => (
          <Label
            text={item.text}
            textColor={labelTextColor}
            backgroundColor={labelBackgroundColor}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    padding: 5,
  },
  flatList: {
    flexWrap: 'wrap',
  },
});

export default LabelContainer;
