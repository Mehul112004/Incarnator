import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardScreen from '../components/Screens/OnboardScreen';
import LoginScreen from '../components/Screens/LoginScreen';
import CredentialScreen from '../components/Screens/CredentialScreen';

const Stack = createNativeStackNavigator()
export default function index() {
    return (

        <Stack.Navigator>
            <Stack.Screen name='Onboard' component={OnboardScreen} screenOptions={{headerShown: false}} />
            <Stack.Screen name='Login' component={LoginScreen} screenOptions={{headerShown: false}} />
            <Stack.Screen name='Credential' component={CredentialScreen} screenOptions={{headerShown: false}} />


        </Stack.Navigator>

    );
}