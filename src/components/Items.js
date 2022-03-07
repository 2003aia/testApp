import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {blue, lightRed, purple, white} from '../props';
import {Item} from './Item'


export const Tables = ({data}) => {
  const renderItem = ({item}) => <Item el={item} />;

  let titles = Object.keys(data);
  let values = Object.values(data);

  values.forEach((element, index) => {
    element.title = titles[index];
  });

  return (
    <View style={style.main}>
      <FlatList
        numColumns={2}
        data={values}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: '#eee',
    flex: 1,
  },
  items: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  item: {
    width: '50%',
    backgroundColor: white,
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
    paddingLeft: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});
