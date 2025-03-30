import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'

import { useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp, hp } from '../../utils/Common.js'

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headText}>Incarnator</Text>
      <Text style={styles.middleText}>Bringing Your imagination {'\n'}To Life</Text>
      <Text style={styles.bottomText}>Unleash Your Creativity With AI </Text>
      <TouchableOpacity style={[styles.Button, { width: wp(85) }]}>
        <Image source={require("../../assets/images/Google_logo.jpg")} style={styles.icon} />
        <Text style={styles.buttonText}>Sign Up With Google</Text>
      </TouchableOpacity>




      <View style={styles.navigationText}>

        <Text >Click On Button to go on CredentialScreen</Text>
        <Button title='Click me' onPress={() => navigation.navigate("credentials")} />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  headText: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: wp(14),
    fontFamily: 'sans-serif',
  },

  middleText: {
    fontWeight: '600',
    fontFamily: 'sans-serif',
    fontSize: wp(12),
    textAlign: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    position: 'absolute',
    top: '15%',
  },

  bottomText: {

    fontFamily: 'sans-serif',
    fontSize: wp(8),

    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    textAlign: 'center',
  },

  Button: {
    marginBottom: hp(2),
    backgroundColor: "white",
    width: "80%",
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    top: '5%',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    alignSelf: "center",
  },

  buttonText: {
    fontSize: wp(5),
    paddingHorizontal: wp(3),
    color: "black",
  },

  icon: {
    height: wp(8),
    width: wp(8),
    marginRight: wp(3),
  },

  navigationText: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  }

})
