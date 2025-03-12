import { View, Text,Button,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const OnboardScreen = () => { 
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
     <Text>Click On Button to go on LoginScreen</Text>
      <Button title='Click me' onPress={()=>navigation.navigate("Login")}/>
    </View>
  )
}

export default OnboardScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },

})