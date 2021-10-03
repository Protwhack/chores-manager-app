import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useQuery } from '@apollo/client';
import { GET_EXCHANGE_RATES } from '~/gql/exchange';
import {keyExtractor} from '~/utils/list';

const Item = ({ item }) => {
  const { currency, rate } = item;
  return (
    <ListItem>
      <ListItem.Title>{currency}</ListItem.Title>
      <ListItem.Title>{rate}</ListItem.Title>
    </ListItem>
  );
};

const HomeScrenn = () => {
  const { data, loading } = useQuery(GET_EXCHANGE_RATES);
  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data?.rates ?? []}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={keyExtractor}
    />
  );
};

HomeScrenn.screenName = 'Home';

export default HomeScrenn;
