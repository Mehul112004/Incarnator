import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardScreen from "../components/Screens/OnboardScreen";
import LoginScreen from "../components/Screens/LoginScreen";
import CredentialScreen from "../components/Screens/CredentialScreen";
import MyTabs from "./BottomTabs/BottomTabs";

const Stack = createNativeStackNavigator();
export default function index() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }} >
      <Stack.Screen
        name="onboard"
        component={OnboardScreen}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name="credentials"
        component={CredentialScreen}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen name="incarnatorHome" component={MyTabs} />
    </Stack.Navigator>
  );
}
