import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { useProfileStore } from "../../store/profileStore";

const LoginScreen = () => {
  const navigation = useNavigation();
  const profile = useProfileStore((state) => state.profile);
  const setProfile = useProfileStore((state) => state.setProfile);
  return (
    <View style={styles.container}>
      <Text>Click On Button to go on CredentialScreen</Text>
      <Button
        title="Click me"
        onPress={() => {
          setProfile({
            ...profile,
            phone: "1238234u",
          });
          navigation.navigate("credentials");
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
