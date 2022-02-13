import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {white} from '../props';

export const Quote = () => {

     const fetch = async () => {
       const response = fetch(
        'https://poloniex.com/public?command=returnTicker',
      ).then(response => response.json())
      .then(data => console.log(data, 'data'));
    };
    
  useEffect(() => {
   
    
  }, []);
  return (
    <View style={style.main}>
      <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>
        Financial quote
      </Text>

      <View></View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: white,
    flex: 1,

    height: 400,
  },
});
