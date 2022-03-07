import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {blue, lightRed, white} from '../props';
import axios from 'axios';
import {Tables} from '../components/Items';

export const Quote = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [state, setState] = useState({ data: null, error: false, loading: true })

  async function getData() {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://poloniex.com/public?command=returnTicker',
      );
      setData(response.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }
  const url = 'https://poloniex.com/public?command=returnTicker'
  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval to a variable to clear it.
      setState(state => ({data: state.data, error: false, loading: true}));

      axios
        .get(url)
        .then((newData) =>{
            setData(newData.data);
          setState({data: newData, error: false, loading: false})
        
        }
         
         
        );
      
      
    }, 5000);

    return () => clearInterval(intervalId); //This is important
  }, [url, useState]);

/*   useEffect(() => {
    getData();
  }, []); */
  return (
    <View style={style.main}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Financial quote
      </Text>
      {loading ? (
        <ActivityIndicator color={blue} size={'large'} />
      ) : (
        <Tables data={data} />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
    height: 400,
  },
});
