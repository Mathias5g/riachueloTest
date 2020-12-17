import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <Icon name="user" size={40} color="#000000" />
        </View>
        <Text style={styles.username}>Username</Text>
      </View>
      <View style={styles.actionButtons}>
        <Icon name="star" size={40} color="#ffffff" />
        <Icon name="close" size={40} color="#ffffff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    paddingHorizontal: 18,
    backgroundColor: '#000000',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 22,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Menu;
