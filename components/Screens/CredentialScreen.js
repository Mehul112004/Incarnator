import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const CredentialScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WELCOME TO CREDENTIAL SCREEN</Text>
    </View>
  )
}

export default CredentialScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },

})