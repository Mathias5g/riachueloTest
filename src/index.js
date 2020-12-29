import React from 'react';
import './config/ReactotronConfig';
import {StatusBar} from 'react-native';
import Routes from './routes';

const App = () => (
  <>
    <StatusBar backgroundColor="#000000" barStyle="dark-light" />
    <Routes />
  </>
);

export default App;
