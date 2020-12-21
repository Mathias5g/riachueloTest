import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import ModalLogin from './ModalLogin';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <Text style={styles.title}>Welcome to the jungle</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ModalLogin
          titleModal="Welcome"
          titleButton="Sign In"
          navigation={navigation}
        />
        <ModalLogin
          titleModal="Create new user"
          titleButton="Sign Up"
          navigation={navigation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 80,
  },
  header: {},
  logoContainer: {
    width: 80,
    height: 80,
    marginBottom: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 24,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
