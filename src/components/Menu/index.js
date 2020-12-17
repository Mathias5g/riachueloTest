import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Menu = ({buttonFavourite, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon name="user-circle-o" size={40} color="#000000" />
        </View>
        <Text style={styles.username}>Username</Text>
      </View>
      <View style={styles.actionButtons}>
        {buttonFavourite && (
          <TouchableOpacity onPress={() => navigation.navigate('favourites')}>
            <FontAwesomeIcon
              style={styles.actionButtonsIcon}
              name="star-o"
              size={24}
              color="#ffffff"
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <FontAwesomeIcon
            style={styles.actionButtonsIcon}
            name="sign-out"
            size={24}
            color="#ffffff"
          />
        </TouchableOpacity>
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
  actionButtonsIcon: {
    margin: 10,
  },
});

export default Menu;
