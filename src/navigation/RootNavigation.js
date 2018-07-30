import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

/* Screens */
import HomeScreen from '../screens/Home/';

const RootStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    headerMode: 'none',
  }
);

export default RootStackNavigator;
