import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import getRealm from '../../services/realm';
import Menu from '../../components/Menu';
import Items from '../../components/Items';

const Favourites = ({navigation}) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    async function loadChannels() {
      const realm = await getRealm();
      const channels = realm.objects('Channel');
      setFavourites(channels);
    }

    loadChannels();
  }, []);

  const renderItem = ({item}) => (
    <Items
      id={item.channelId}
      thumbnail={item.thumbnails}
      title={item.channelTitle}
      favourite={item.favourite}
    />
  );

  return (
    <View style={styles.container}>
      <Menu navigation={navigation} buttonFavourite={false} />
      <View style={styles.favorites}>
        <Text style={styles.favoriteTitle}>My Favourites</Text>
      </View>
      <FlatList
        data={favourites}
        renderItem={renderItem}
        keyExtractor={(item) => item.channelId}
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

export default Favourites;
