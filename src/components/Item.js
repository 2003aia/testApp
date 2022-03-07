import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {blue, lightRed, purple, white} from '../props';

export const Item = ({el}) => {
    const nav = useNavigation()
    return (
      <TouchableOpacity onPress={() => {
  
        nav.navigate('itemFull', {
            el: el,
            itemId: el.id
        })
      }} style={style.item}>
        <Text style={style.text}>{el.title}</Text>
      </TouchableOpacity>
    )
}

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