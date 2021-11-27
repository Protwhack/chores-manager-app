import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useQuery } from '@apollo/client';
import { GET_AREAS_CHORES } from '~/gql/areas';
import { keyExtractor } from '~/utils/list';

const renderItem = ({ item }) => (
  <ListItem bottomDivider>
    <Avatar source={{ uri: item.iconUrl }} />
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{`Color: ${item.color}`}</ListItem.Subtitle>
      <ListItem.Subtitle>{`Chores: ${item.chores}`}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
);

const GraphqlResultList = props => {
  const { data, loading } = useQuery(GET_AREAS_CHORES);
  if (loading) {
    return (
      <View style={props.style}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={props.style}
      keyExtractor={keyExtractor}
      data={data?.areas ?? []}
      renderItem={renderItem}
    />
  );
};

export default GraphqlResultList;
