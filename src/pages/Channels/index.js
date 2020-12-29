import React, {useState} from 'react';
import api from '../../services/api';

import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Keyboard,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Menu from '../../components/Menu';
import Items from '../../components/Items';

const Channels = ({navigation}) => {
  const [inputSearch, setInputSearch] = useState(null);
  const [channels, setChannels] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [prevPageToken, setPrevPageToken] = useState(null);

  const handleSearchChannel = async () => {
    try {
      const response = await api.get(
        `search?part=snippet&maxResults=10&pageToken=CAoQAN&q=${inputSearch}&type=video&key=AIzaSyBMopcHAjLrDrJXBiAh7V3eZ6EmgfSS_N8`,
      );

      const channelsSearch = response.data.items.map((channel) => ({
        channelId: channel.snippet.channelId,
        thumbUrl: channel.snippet.thumbnails.default.url,
        channelTitle: channel.snippet.channelTitle,
      }));

      setNextPageToken(response.data.nextPageToken);
      setChannels(channelsSearch);
      setInputSearch(null);
      Keyboard.dismiss();
    } catch (error) {
      console.tron.warn(error);
    }
  };

  const nextPage = async () => {
    try {
      setChannels(null);

      const response = await api.get(
        `search?part=snippet&maxResults=10&pageToken=${nextPageToken}&q=${inputSearch}&type=video&key=AIzaSyBMopcHAjLrDrJXBiAh7V3eZ6EmgfSS_N8`,
      );

      const channelsSearch = response.data.items.map((channel) => ({
        channelId: channel.snippet.channelId,
        thumbUrl: channel.snippet.thumbnails.default.url,
        channelTitle: channel.snippet.channelTitle,
      }));

      setNextPageToken(response.data.nextPageToken);
      setPrevPageToken(response.data.prevPageToken);
      setChannels(channelsSearch);
    } catch (error) {
      console.tron.warn(error);
    }
  };
  const prevPage = async () => {
    try {
      setChannels(null);

      const response = await api.get(
        `search?part=snippet&maxResults=10&pageToken=${prevPageToken}&q=${inputSearch}&type=video&key=AIzaSyBMopcHAjLrDrJXBiAh7V3eZ6EmgfSS_N8`,
      );

      const channelsSearch = response.data.items.map((channel) => ({
        channelId: channel.snippet.channelId,
        thumbUrl: channel.snippet.thumbnails.default.url,
        channelTitle: channel.snippet.channelTitle,
      }));

      setNextPageToken(response.data.nextPageToken);
      setPrevPageToken(response.data.prevPageToken);
      setChannels(channelsSearch);
    } catch (error) {
      console.tron.warn(error);
    }
  };

  const renderItem = ({item}) => (
    <Items
      id={item.channelId}
      thumbnail={item.thumbUrl}
      title={item.channelTitle}
      favourite={false}
    />
  );

  return (
    <View style={styles.container}>
      <Menu navigation={navigation} buttonFavourite={true} />
      <View style={styles.search}>
        <TextInput
          onChangeText={setInputSearch}
          value={inputSearch}
          style={styles.inputSearch}
          placeholder="Channels"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.buttonSearch}
          onPress={() => handleSearchChannel()}>
          <FontAwesomeIcon name="search" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={channels}
        renderItem={renderItem}
        keyExtractor={(item) => item.channelId}
      />
      <View style={styles.containerButtonsPage}>
        <TouchableOpacity onPress={prevPage} style={styles.buttonPage}>
          <Text style={styles.textPage}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextPage} style={styles.buttonPage}>
          <Text style={styles.textPage}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 20,
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  itemTitle: {
    flex: 1,
    fontWeight: '500',
    fontSize: 16,
    marginHorizontal: 18,
  },
  search: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 26,
  },
  inputSearch: {
    height: 40,
    flex: 1,
    backgroundColor: '#EBEBEB',
    borderRadius: 4,
    marginRight: 18,
    paddingLeft: 12,
  },
  buttonSearch: {
    width: 40,
    height: 40,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  containerButtonsPage: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPage: {
    width: 120,
    height: 60,
    backgroundColor: '#000000',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textPage: {
    color: '#ffffff',
  },
});

export default Channels;
