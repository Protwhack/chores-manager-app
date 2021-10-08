import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Label from './Label';
import { uuid } from 'uuid4';

const labelTextColor = '#404040';
const labelBackgroundColor = '#EAFFEA';

const LabelContainer = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Put compost out' },
    { id: 2, text: 'Water plants' },
    { id: 3, text: 'Sweep leaves' },
    { id: 4, text: 'Mop floor' },
    { id: 5, text: 'Put rubbish out' },
    { id: 5, text: 'Clean bath tub' },
    { id: 5, text: 'Clean basin' },
    { id: 5, text: 'Vacuum floor' },
  ]);

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
