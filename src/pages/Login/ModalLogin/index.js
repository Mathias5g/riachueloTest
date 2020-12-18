/* Esse arquivo foi feito com componente de
  classe para desmonstrar o entedimento */

import React, {Component} from 'react';
import {StackActions} from '@react-navigation/native';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import {saveToken} from '../../../api/Auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class ModalLogin extends Component {
  state = {
    modalVisible: false,
    username: '',
    password: '',
  };

  data = {username: 'mathias', password: '123'};

  setModalVisible = (modalVisible) => {
    this.setState({modalVisible});
  };

  handleUsernameChange = (username) => {
    this.setState({username});
  };

  handlePasswordChange = (password) => {
    this.setState({password});
  };

  handleSignInPress = async () => {
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      return false;
    }

    if (
      this.state.username !== this.data.username ||
      this.state.password !== this.data.password
    ) {
      return false;
    }

    await saveToken(this.state.username);

    this.props.navigation.dispatch(StackActions.replace('Channels'));
  };

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={this.setModalVisible}>
                <FontAwesome name="close" size={18} />
              </TouchableOpacity>
              <Text style={styles.title}>{this.props.titleModal}</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="User"
                  value={this.state.username}
                  onChangeText={this.handleUsernameChange}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={this.state.password}
                  onChangeText={this.handlePasswordChange}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: '#000000'}]}
                onPress={this.handleSignInPress}>
                <Text style={[styles.buttonTitle, {color: '#ffffff'}]}>
                  {this.props.titleButton}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.buttonTitle}>{this.props.titleButton}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
