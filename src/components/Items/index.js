import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Items = (props) => {
  const [favourite, setFavourite] = useState(false);

  const handleFavourite = () => {
    props.favourite ? setFavourite(favourite) : setFavourite(!favourite);
  };

  console.log(props.thumbnail);

  return (
    <View style={styles.item}>
      <Image style={styles.itemImage} source={{uri: props.thumbnail}} />
      <Text style={styles.itemTitle}>{props.title}</Text>
      <TouchableOpacity>
        <FontAwesomeIcon
          name={favourite ? 'star' : 'star-o'}
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
