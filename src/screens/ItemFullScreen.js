import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {purple} from '../props';

export const ItemFullScreen = (route, navigation) => {
  const {el} = route.route.params;
  const nav = useNavigation()
  return (
    <ScrollView>
      <TouchableOpacity
      style={style.back}
      onPress={()=>{
          nav.goBack()
      }}
      >
        <Text style={style.backText}>⬅ Назад</Text>
      </TouchableOpacity>
      <View style={style.row}>
        <Text>{el.title}</Text>
      </View>
      <View style={style.columns}>
        <View style={style.column}>
          <View style={style.row}>
            <Text>last</Text>
          </View>
          <View style={style.row}>
            <Text>lowestAsk</Text>
          </View>
          <View style={style.row}>
            <Text>highestBid</Text>
          </View>
          <View style={style.row}>
            <Text>percentChange</Text>
          </View>
          <View style={style.row}>
            <Text>baseVolume</Text>
          </View>
          <View style={style.row}>
            <Text>quoteVolume</Text>
          </View>
          <View style={style.row}>
            <Text>isFrozen</Text>
          </View>
          <View style={style.row}>
            <Text>postOnly</Text>
          </View>
          <View style={style.row}>
            <Text>high24hr</Text>
          </View>
          <View style={style.row}>
            <Text>low24hr</Text>
          </View>
        </View>

        <View style={style.column}>
          <View style={style.row}>
            <Text>{el.last}</Text>
          </View>
          <View style={style.row}>
            <Text>{el.lowestAsk}</Text>
          </View>
          <View style={style.row}>
            <Text>{el.highestBid}</Text>
          </View>
          <View style={style.row}>
            <Text>{el.percentChange}</Text>
          </View>
          <View style={style.row}>
            <Text>{el.baseVolume}</Text>
          </View>
          <View style={style.row}>
            <Text>{el.quoteVolume}</Text>
          </View>
          <View style={style.row}>
            <Text>{el.isFrozen}</Text>
          </View>
          <View style={style.row}>
            <Text>{el.postOnly}</Text>
          </View>
          <View style={style.row}>
            <Text>{el.high24hr}</Text>
          </View>
          <View style={style.row}>
            <Text>{el.low24hr}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: '#eee',
    flex: 1,
  },
  back: {
    marginTop: 10,
    padding: 10,
    backgroundColor: purple,
    width: 100,
    marginLeft: 20,
    marginBottom: 10,  
    borderRadius: 20,
  },
  backText: {
      fontWeight: 'bold',
      color: 'white'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    fontWeight: '700',
  },
  columns: {
    flexDirection: 'row',
    width: '100%',
  },
  column: {
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'space-evenly',
  },
});
