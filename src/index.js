import React from 'react';
import {StatusBar} from 'react-native';
import Channels from './pages/Channels';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#000000"
      />
      <Channels />
    </>
  );
};

export default App;
