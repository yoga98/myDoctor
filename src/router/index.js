import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, Login, Register, Splash, UploadPhoto } from '../pages';
// Stcak bawaan react-navigation yang sudah di install di awal 
//screen adalah tampilan yang aakn di tampilkan
const Stack = createStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}
export default Router;