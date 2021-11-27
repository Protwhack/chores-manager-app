import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { useQuery } from '@apollo/client';
import { GET_AREAS } from '~/gql/areas';
import { normalize } from '~/utils/styling';

const SpacePicker = props => {
  const { data, loading } = useQuery(GET_AREAS);
  if (loading) {
    return (
      <View style={props.style}>
        <Text>Loading</Text>
      </View>
    );
  }

  const spaceIconComponents = data.areas.map(({ iconUrl, name }, index) => (
    <View key={index} style={styles.spaceContainer}>
      <Image
        source={{ uri: iconUrl }}
        style={styles.spaceIcon}
        PlaceholderContent={<ActivityIndicator />}
        onPress={() => console.log(`Space ${name} is pressed`)}
      />
      <Text style={styles.spaceName}>{name}</Text>
    </View>
  ));

  return <>{spaceIconComponents}</>;
};

const styles = StyleSheet.create({
  spaceContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: normalize(25),
  },
  spaceIcon: {
    width: normalize(84),
    height: normalize(84),
  },
  spaceName: {
    fontSize: normalize(12),
    lineHeight: normalize(24),
  },
});

export default SpacePicker;
