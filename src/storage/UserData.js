import AsyncStorage from '@react-native-async-storage/async-storage';

export async function _saveUserData(id, username, logado) {
  try {
    await AsyncStorage.setItem('@AppTestRiachuelo:id', JSON.stringify(id));
    await AsyncStorage.setItem(
      '@AppTestRiachuelo:username',
      JSON.stringify(username),
    );
    await AsyncStorage.setItem(
      '@AppTestRiachuelo:logado',
      JSON.stringify(logado),
    );
  } catch (error) {
    console.log(error);
  }
}

export async function _getUserData() {
  try {
    let id, username, logado;
    id = await AsyncStorage.getItem('@AppTestRiachuelo:id');
    username = await AsyncStorage.getItem('@AppTestRiachuelo:username');
    logado = await AsyncStorage.getItem('@AppTestRiachuelo:logado');

    return {id, username, logado};
  } catch (error) {
    console.log(error);
  }
}

export async function _deleteUserData() {
  try {
    await AsyncStorage.removeItem('@AppTestRiachuelo:id');
    await AsyncStorage.removeItem('@AppTestRiachuelo:username');
    await AsyncStorage.removeItem('@AppTestRiachuelo:logado');
  } catch (error) {
    console.log(error);
  }
}
