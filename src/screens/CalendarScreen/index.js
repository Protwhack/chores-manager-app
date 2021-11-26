import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem, FAB } from 'react-native-elements';
import { useQuery } from '@apollo/client';
import { GET_EXCHANGE_RATES } from '~/gql/exchange';
import { keyExtractor } from '~/utils/list';
import theme from '~/theme';

const Item = ({ item }) => {
  const { currency, rate } = item;
  return (
    <ListItem>
      <ListItem.Title>{currency}</ListItem.Title>
      <ListItem.Title>{rate}</ListItem.Title>
    </ListItem>
  );
};

const CalendarScreen = () => {
  const { data, loading } = useQuery(GET_EXCHANGE_RATES);
  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={data?.rates ?? []}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={keyExtractor}
      />
      <FAB
        placement='right'
        color={theme.colors.primary}
        icon={{ type: 'feather', name: 'plus', color: '#fff' }}
        buttonStyle={styles.fabButton}
        onPress={() => console.log('Add a routine')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  fabButton: { borderRadius: 100 },
});

CalendarScreen.screenName = 'Home';

export default CalendarScreen;
