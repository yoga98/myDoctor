import React from 'react';
import {Splash,GetStarted} from './pages';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Router from './router';

const App = () => {
  return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
  );
};
export default App;