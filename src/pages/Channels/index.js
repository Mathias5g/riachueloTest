import React from 'react';
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

const DATA = [
  {
    id: '1',
    image:
      'https://exame.com/wp-content/uploads/2016/09/size_960_16_9_era-do-gelo.jpg',
    url: 'http://',
    title: 'Era do gelo',
    favourite: false,
  },
  {
    id: '2',
    image:
      'https://exame.com/wp-content/uploads/2016/09/size_960_16_9_era-do-gelo.jpg',
    url: 'http://',
    title: 'Era do gelo',
    favourite: false,
  },
  {
    id: '3',
    image:
      'https://exame.com/wp-content/uploads/2016/09/size_960_16_9_era-do-gelo.jpg',
    url: 'http://',
    title: 'Era do gelo',
    favourite: false,
  },
];

const Channels = ({navigation}) => {
  const renderItem = ({item}) => (
    <Items title={item.title} favourite={item.favourite} />
  );

  return (
    <View style={styles.container}>
      <Menu navigation={navigation} buttonFavourite={true} />
      <View style={styles.search}>
        <TextInput style={styles.inputSearch} placeholder="Channels" />
        <TouchableOpacity style={styles.buttonSearch}>
          <FontAwesomeIcon name="search" size={24} color="#ffffff" />
        </TouchableOpacity>
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
