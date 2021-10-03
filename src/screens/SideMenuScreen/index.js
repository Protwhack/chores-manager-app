import React from 'react';
import { useNavigationButtonPress } from 'react-native-navigation-hooks';
import { StyleSheet, Text, View, SectionList } from "react-native";
import { ListItem, Icon, Image } from 'react-native-elements';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import noHomeRoutes from '~/routes/noHomeRoutes';
import theme from '~/theme';
import {normalize} from '~/utils/styling';
import {keyExtractor} from '~/utils/list';

import logoPng from 'Assets/logo-side-menu.png';

const { colors } = theme;

const list = [
  {
    title: "My Home",
    data: [
      {
        title: 'Invite new roommate',
        icon: 'share-2',
      },
      {
        title: 'Edit my house’s name',
        icon: 'edit-3',
      },
    ]
  },
  {
    title: "Baboon’s Chores",
    data: [
      {
        title: 'Information & Help',
        icon: 'help-circle',
      },
      {
        title: 'Rate & Feedback',
        icon: 'star',
      },
    ]
  },
  {
    title: "My Account",
    data: [
      {
        title: 'Leave this home',
        icon: 'log-out',
        onPress: noHomeRoutes
      },
    ]
  },
];

const renderItem = ({ item }) => (
  <ListItem
    style={styles.itemContainer}
    underlayColor={colors.underlay}
    onShowUnderlay={() => {}}
    onHideUnderlay={() => {}}
    onPress={item.onPress}
  >
    <ListItem.Content style={styles.item}>
      <Icon
        style={styles.itemIcon}
        type="feather"
        name={item.icon}
        size={40}
      />
      <ListItem.Title style={styles.itemTitle}>{item.title}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
);

const renderSectionHeader = ({ section: { title } }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const SideMenuScreen = ({
  control,
  name,
  error,
  placeholder,
  inputProps = {},
  ...props
}) => (
  <View style={styles.container}>
    <View style={styles.appInfoContainer}>
      {false && <SvgUri
        width="80"
        height="80"
        svgXmlData={LogoSvg}
      />}
      <Image style={styles.appImage} source={logoPng} />
      <Text style={styles.appName}>Baboon’s Chores</Text>
    </View>
    <View style={styles.profile}>
      <View style={styles.avatar}/>
      <Text style={styles.name}>Alex</Text>
    </View>
    <SectionList
      style={styles.listContainer}
      sections={list}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: getStatusBarHeight(true),
  },

  appInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 17,
  },
  appImage: {
    height: normalize(40),
    width: normalize(40),
    resizeMode: 'cover',
  },
  appName: {
    marginLeft: normalize(10),
    color: colors.primary,
    fontSize: normalize(16),
    fontWeight: '500',
    lineHeight: normalize(24),
  },

  profile: {
    height: normalize(64),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(34.5),
    marginBottom: normalize(37.5),
  },
  avatar: {
    borderColor: colors.primary,
    borderWidth: normalize(4),
    borderRadius: 100,
    height: normalize(64),
    width: normalize(64),
  },
  name: {
    marginTop: 5,
    fontSize: normalize(14)
  },

  listContainer: {
    borderTopWidth: 1,
    borderColor: colors.grey2,
  },
  header: {
    paddingLeft: normalize(16),
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: normalize(12),
    color: colors.grey1,
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: normalize(20),
    backgroundColor: 'transparent',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  itemIcon: {
  },
  itemTitle: {
    marginLeft: normalize(20),
    fontSize: normalize(14),
    color: colors.grey0,
  },
});

SideMenuScreen.screenName = 'SideMenu';

export default SideMenuScreen;
