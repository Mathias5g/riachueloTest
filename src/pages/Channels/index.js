import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import Menu from '../../components/Menu';

const Channels = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <Text>Ola Mundo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Channels;
