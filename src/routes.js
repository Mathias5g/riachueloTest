import React, {useState, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from './config/Context';
import Loading from './components/Loading';
import Login from './pages/Login';
import Channels from './pages/Channels';
import Favourites from './pages/Favourites';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

const LoggedStack = createStackNavigator();
const LoggedStackScreen = () => (
  <LoggedStack.Navigator
    initialRouteName="Channels"
    screenOptions={{headerShown: false}}>
    <LoggedStack.Screen name="Channels" component={Channels} />
    <LoggedStack.Screen name="Favourites" component={Favourites} />
  </LoggedStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={LoggedStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('mathias');
      },
      SignOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
