import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen  from '../screens/SigInScreen';
import SignUpScreen  from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import DashboardScreen from '../screens/DashboardScreen';
import UserScreen from '../screens/UserScreen';
import MenuScreen from '../screens/MenuScreen';
import FishpondScreen from '../screens/FishpondScreen';
import O2Screen from '../screens/measurements/O2Screen';
import PHScreen from '../screens/measurements/PHScreen';
import TempScreen from '../screens/measurements/TempScreen';
const Stack = createNativeStackNavigator();
function Navigation(){
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerBackVisible: false}}>
                <Stack.Screen name="SignIn" component={SignInScreen} options={{headerStyle: {backgroundColor: '#0C98EE'}, headerTintColor: '#0C98EE'}}/>
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerStyle: {backgroundColor: '#0C98EE'}, headerTintColor: '#0C98EE'}}/>
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{headerStyle: {backgroundColor: '#0C98EE'}, headerTintColor: '#0C98EE'}}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerStyle: {backgroundColor: '#0C98EE'}, headerTintColor: '#0C98EE'}}/>
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{headerStyle: {backgroundColor: '#0C98EE'}, headerTintColor: '#0C98EE'}}/>
                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{gestureEnabled: false}} /> 
                <Stack.Screen name="User" component={UserScreen} />
                <Stack.Screen name="Menu" component={MenuScreen} />   
                <Stack.Screen name="Fishpond" component={FishpondScreen} />   
                <Stack.Screen name="O2" component={O2Screen} /> 
                <Stack.Screen name="PH" component={PHScreen} /> 
                <Stack.Screen name="Temp" component={TempScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;