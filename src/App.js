import React from 'react';
import { View } from 'react-native';
import { ILLogo } from './assets';
import { GetStarted } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <View>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </View>
  );
};
export default App;

