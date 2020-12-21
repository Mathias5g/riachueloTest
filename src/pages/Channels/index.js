import React, {useState} from 'react';
import api from '../../services/api';
import getRealm from '../../services/realm';

import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Menu from '../../components/Menu';
import Items from '../../components/Items';

const Channels = ({navigation}) => {
  const [inputSearch, setInputSearch] = useState(null);
  const [channels, setChannels] = useState([]);

  /*
  const saveChannel = async (channel) => {
    const data = {
      channelId: channel.channelId,
      channelTitle: channel.channelTitle,
      thumbnails: data.thumbnails,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Channel', data);
    });
  };*/

  const handleSearchChannel = async () => {
    try {
      const response = await api.get(
        `search?part=snippet&maxResults=10&q=${inputSearch}&type=video&key=AIzaSyBMopcHAjLrDrJXBiAh7V3eZ6EmgfSS_N8`,
      );

      await saveChannel(response.data.channelTitle);
      setInputSearch(null);
    } catch (error) {
      console.tron.warn('erro');
    }
  };
  /*
  const renderItem = ({item}) => (
    <Items title={item.title} favourite={item.favourite} />
  );*/

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
      {/*<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />*/}
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
});

export default Channels;
