/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {AboutScreen} from './src/screens/AboutScreen';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Quote} from './src/screens/QuoteScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { ubuntu } from './src/props';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
      
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'О приложении') {
              iconName = focused
                ? 'phone-portrait-outline'
                : 'phone-portrait-outline';
            } else if (route.name === 'Котировки') {
              iconName = focused ? 'bar-chart-outline' : 'bar-chart-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarStyle: { 
              backgroundColor: '#9a9ed9',
              height: 80,

          },
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {
            marginBottom: 5,
            fontSize: 15,
            fontFamily: ubuntu,
            fontWeight: 'bold'
          },
          tabBarItemStyle: {
            paddingTop: 10,
            paddingBottom: 10,
          },
          tabBarActiveTintColor: '#075985',
          tabBarInactiveTintColor: 'white',
        })}>
        <Tab.Screen name="О приложении" component={AboutScreen} />
        <Tab.Screen name="Котировки" component={Quote} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
