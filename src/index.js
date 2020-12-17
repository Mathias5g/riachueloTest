import React from 'react';
import {StatusBar} from 'react-native';
import Favourite from './pages/Favourite';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#000000"
      />
      <Favourite />
    </>
  );
};

export default App;
