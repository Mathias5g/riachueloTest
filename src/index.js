import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import Login from './pages/Login';
import Channels from './pages/Channels';
import Favourites from './pages/Favourites';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#000000"
      />
      <Stack.Navigator initialRouteName="login" headerMode="none">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="channels" component={Channels} />
        <Stack.Screen name="favourites" component={Favourites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
