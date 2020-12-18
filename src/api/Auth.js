import AsyncStorage from '@react-native-async-storage/async-storage';

export async function _saveToken(userToken) {
  try {
    await AsyncStorage.setItem('@AppTest:useToken', JSON.stringify(userToken));
  } catch (error) {
    throw error;
  }
}
export async function _getToken(key) {
  try {
    let token;
    token = await AsyncStorage.getItem(key);
    return token;
  } catch (error) {
    throw error;
  }
}

export async function _deleteToken() {
  try {
    await AsyncStorage.remoteItem('@AppTest:useToken');
  } catch (error) {
    throw error;
  }
}
