import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text>Buscando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#ffffff',
  },
});

export default Loading;
