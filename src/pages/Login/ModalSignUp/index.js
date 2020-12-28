import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import getRealm from '../../../services/realm';
import {_saveUserData} from '../../../storage/UserData';
import {AuthContext} from '../../../config/Context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ModalSignUp = () => {
  const {signIn} = React.useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  //Função que cria o usuário ao clicar no botão
  const handleSignUpPress = async () => {
    const realm = await getRealm();
    const getId = realm.objects('User').max('id');

    const data = {
      id: getId == null ? 1 : getId + 1,
      username,
      password,
    };

    try {
      realm.write(() => {
        realm.create('User', data);
      });

      setUsername(null);
      setPassword(null);
      _saveUserData(data.id, data.username);

      signIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}>
              <FontAwesome name="close" size={18} />
            </TouchableOpacity>
            <Text style={styles.title}>Create new user</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="User"
                value={username}
                onChangeText={(username) => setUsername(username)}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#000000'}]}
              onPress={() => handleSignUpPress()}>
              <Text style={[styles.buttonTitle, {color: '#ffffff'}]}>
                Sign Up
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
        <Text style={styles.buttonTitle}>Sign Up</Text>
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

export default ModalSignUp;
