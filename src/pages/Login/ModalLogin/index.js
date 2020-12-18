import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ModalLogin = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <FontAwesome name="close" size={16} />
            </TouchableOpacity>
            <Text style={styles.title}>{props.titleModal}</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="User" />
              <TextInput style={styles.input} placeholder="Password" />
            </View>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#000000'}]}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={[styles.buttonTitle, {color: '#ffffff'}]}>
                {props.titleButton}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.buttonTitle}>{props.titleButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    height: '50%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'flex-end',
  },
  title: {
    flex: 1,
    fontWeight: '500',
    fontSize: 24,
    marginTop: 30,
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    height: 40,
    backgroundColor: '#EBEBEB',
    borderRadius: 4,
    marginBottom: 14,
    padding: 10,
  },
  button: {
    width: 280,
    height: 60,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    color: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 140,
  },
  buttonTitle: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 20,
  },
});

export default ModalLogin;
