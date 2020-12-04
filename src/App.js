import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import FlashMessage from "react-native-flash-message";
import { Provider, useSelector } from "react-redux"; //setupredux
import { Loading } from './components';
import store from './redux/store'; //set Upredux
import Router from './router';


//dan membuat MainApp
const MainApp = () => {
  // cara panggil global
  const stateGlobal = useSelector(state =>state);
  console.log('state global :', stateGlobal); //cek  
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    {/* logic loading */}
    {stateGlobal.loading && <Loading/>} 
    </>
  );
};

// merubah App
//agar mengkonsumsi store lebi mudah
const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
};

export default App;