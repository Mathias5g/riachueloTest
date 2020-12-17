import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import Menu from '../../components/Menu';
import Items from '../../components/Items';

const DATA = [
  {
    id: '1',
    image:
      'https://exame.com/wp-content/uploads/2016/09/size_960_16_9_era-do-gelo.jpg',
    url: 'http://',
    title: 'Era do gelo',
    favourite: true,
  },
  {
    id: '2',
    image:
      'https://exame.com/wp-content/uploads/2016/09/size_960_16_9_era-do-gelo.jpg',
    url: 'http://',
    title: 'Esqueceram e mim',
    favourite: false,
  },
  {
    id: '3',
    image:
      'https://exame.com/wp-content/uploads/2016/09/size_960_16_9_era-do-gelo.jpg',
    url: 'http://',
    title: 'Queen',
    favourite: true,
  },
];

const Favourite = () => {
  const renderItem = ({item}) => (
    <Items title={item.title} favourite={item.favourite} />
  );

  return (
    <View style={styles.container}>
      <Menu />
      <View style={styles.favorites}>
        <Text style={styles.favoriteTitle}>My Favourites</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  favorites: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 26,
  },
  favoriteTitle: {
    fontWeight: '500',
    fontSize: 24,
  },
  buttonSearch: {
    width: 40,
    height: 40,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Favourite;
