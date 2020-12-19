import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login';
import Channels from './pages/Channels';
import Favourites from './pages/Favourites';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

const ChannelsStack = createStackNavigator();
const ChannelsStackScreen = () => (
  <ChannelsStack.Navigator screenOptions={{headerShown: false}}>
    <ChannelsStack.Screen name="Channels" component={Channels} />;
  </ChannelsStack.Navigator>
);

const FavouritesStack = createStackNavigator();
const FavouritesStackScreen = () => (
  <FavouritesStack.Navigator screenOptions={{headerShown: false}}>
    <FavouritesStack.Screen name="Favourites" component={Favourites} />
  </FavouritesStack.Navigator>
);

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  );
}
