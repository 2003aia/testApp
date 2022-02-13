import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {blue, purple, ubuntu, white} from '../props';

export const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={style.main}>
      <Text
        style={style.text}>
        Перейти на экран
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Котировки')}>
        <Text style={style.text2}>котировки</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: white,
    width: '100%',
  },
  text: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: ubuntu,
    fontWeight: '600',
  },
  text2: {
    color: blue,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: ubuntu,
    fontWeight: '600',
  },
  text_inner: {},
});
