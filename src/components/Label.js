import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Label = ({ text, textColor, backgroundColor }) => {
  return (
    <View style={styles.labelView(backgroundColor)}>
      <Text style={styles.labelText(textColor)}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelView: backgroundColor => ({
    backgroundColor: backgroundColor,
    // justifyContent: 'space-between',
    alignSelf: 'flex-start',
    // FIX: The values need to be confirmed
    borderRadius: 18,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 6,
    marginBottom: 6,
  }),
  labelText: textColor => ({
    color: textColor,
    textAlign: 'center',
  }),
});

export default Label;
