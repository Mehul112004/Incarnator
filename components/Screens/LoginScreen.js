import { View, Text ,Button,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
 

const LoginScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
       <Text>Click On Button to go on CredentialScreen</Text>
       <Button title='Click me' onPress={()=>navigation.navigate("credentials")}/>
    </View>
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

})