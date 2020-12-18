import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authenticated from './api/Auth';
import Login from './pages/Login';
import Channels from './pages/Channels';
import Favourites from './pages/Favourites';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" headerMode="none">
        {Authenticated() ? (
          <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="channels" component={Channels} />
            <Stack.Screen name="favourites" component={Favourites} />
          </>
        ) : (
          <Stack.Screen name="login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
