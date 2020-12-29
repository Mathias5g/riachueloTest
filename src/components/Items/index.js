import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import getRealm from '../../services/realm';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Items = (props) => {
  const handleFavourite = async () => {
    const data = {
      channelId: props.id,
      channelTitle: props.title,
      thumbnails: props.thumbnail,
      favourite: !props.favourite,
    };
    try {
      const realm = await getRealm();
      const findChannel = realm
        .objects('Channel')
        .filtered(`channelId = "${data.channelId}"`);

      realm.write(() => {
        findChannel.length === 0
          ? realm.create('Channel', data)
          : realm.delete(findChannel[0]);
      });
    } catch (error) {
      console.tron.warn(error);
    }
  };

  return (
    <View style={styles.item}>
      <Image style={styles.itemImage} source={{uri: props.thumbnail}} />
      <Text style={styles.itemTitle}>{props.title}</Text>
      <TouchableOpacity>
        <FontAwesomeIcon
          name={props.favourite ? 'star' : 'star-o'}
          size={24}
          onPress={handleFavourite}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
export default Items;
