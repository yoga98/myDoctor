import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, Splash } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
        </Stack.Navigator>
    )
}
export default Router;