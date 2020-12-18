import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login';
import Channels from './pages/Channels';
import Favourites from './pages/Favourites';

import {_getToken} from './api/Auth';

const Stack = createStackNavigator();

export default function Routes() {
  const [hasToken, setHasToken] = useState('');

  useEffect(() => {
    const retrieveData = async () => {
      let token = await _getToken('@AppTest:useToken');
      console.log(token);
    };
    retrieveData();
  }, []);

  console.log(hasToken);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Channels" component={Channels} />
        <Stack.Screen name="Favourites" component={Favourites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
