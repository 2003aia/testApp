import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemFullScreen } from '../screens/ItemFullScreen';
import { Quote } from '../screens/QuoteScreen';

export const QuoteNav =() =>{
const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
        screenOptions={{
             headerShown: false,
        }}
       
        >
            <Stack.Screen component={Quote} name='quoteScreen'/>
            <Stack.Screen component={ItemFullScreen} name='itemFull'/>
            
        </Stack.Navigator>
    )
}