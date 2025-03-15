import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const CredentialScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>WELCOME TO CREDENTIAL SCREEN</Text>
      <Button
        title="Click me"
        onPress={() => navigation.navigate("incarnatorHome")}
      />
    </View>
  );
};

export default CredentialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
