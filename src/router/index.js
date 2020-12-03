import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; //ini bagian navigator
import {
    GetStarted,
    Login,
    Register,
    Splash,
    UploadPhoto,
    Doctor,
    Message,
    Hospital,
    ChooseDoctor,
    Chatting,
    UserProfile,
    UpdateProfile,
    DoctorProfile
} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' // ini bagian tab
import { BottomNavigator } from '../components';
// Stcak bawaan react-navigation yang sudah di install di awal 
//screen adalah tampilan yang aakn di tampilkan
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//ini hampir sama dengan Stack pada router
//harus ada componen yang berasal dari page 
//spred props
const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator{...props} />}>
            <Tab.Screen name="Doctor" component={Doctor} />
            <Tab.Screen name="Message" component={Message} />
            <Tab.Screen name="Hospital" component={Hospital} />
        </Tab.Navigator>
    )
}
//note jika erro coba cek ke atas di bagian pages sudah terpanggil
// main App ini di tampilkan di atas seperti tab tetap
const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="ChooseDoctor" component={ChooseDoctor} options={{ headerShown: false }} />
            <Stack.Screen name="Chatting" component={Chatting} options={{ headerShown: false }} />
            <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown :false}} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{headerShown :false}} />
            <Stack.Screen name="DoctorProfile" component={DoctorProfile} options={{headerShown :false}}/>
        </Stack.Navigator>
    )
}
export default Router;