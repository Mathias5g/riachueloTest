import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <Text style={styles.title}>Welcome to the jungle</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Sign Up</Text>
        </TouchableOpacity>
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
  button: {
    width: 280,
    height: 60,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    color: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonTitle: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 20,
  },
});

export default Login;
