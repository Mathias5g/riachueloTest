import AsyncStorage from '@react-native-async-storage/async-storage';

export async function _saveUserData(id, username) {
  try {
    await AsyncStorage.setItem('@AppTestRiachuelo:id', JSON.stringify(id));
    await AsyncStorage.setItem(
      '@AppTestRiachuelo:username',
      JSON.stringify(username),
    );
  } catch (error) {
    console.log(error);
  }
}

export async function _getUserData() {
  try {
    let id, username;
    id = await AsyncStorage.getItem('@AppTestRiachuelo:id');
    username = await AsyncStorage.getItem('@AppTestRiachuelo:username');

    return username;
  } catch (error) {
    console.log(error);
  }
}

export async function _deleteUserData() {
  try {
    await AsyncStorage.removeItem('@AppTestRiachuelo:id');
    await AsyncStorage.removeItem('@AppTestRiachuelo:username');
  } catch (error) {
    console.log(error);
  }
}
