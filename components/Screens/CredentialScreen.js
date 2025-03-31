import { View, Text, StyleSheet, Button, KeyboardAvoidingView, TextInput, Platform, ScrollView } from "react-native";
import React from "react";
import PhoneInput from "react-native-phone-number-input";
import { useRef,useState } from "react";
import { useNavigation } from "expo-router";
import { wp, hp } from "../../utils/Common";

const CredentialScreen = () => {
  const navigation = useNavigation();
  const phoneInputRef = useRef(null);
  
  const [phoneNumber, setPhoneNumber] = useState("");
 

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardView}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.headText}>Incarnator</Text>
          <Text style={styles.middleText}>Enter YOUR DETAILS</Text>

          <View style={styles.form}>
            <Text style={styles.label}>First Name*</Text>
            <TextInput style={styles.input} placeholder="Enter your First name" />

            <Text style={styles.label}>Last Name*</Text>
            <TextInput style={styles.input} placeholder="Enter your last name" />

           
            <Text style={styles.label}>Phone Number</Text>
              <PhoneInput
                ref={phoneInputRef}
                defaultValue={phoneNumber}
                defaultCode="IN"
                layout="first"
              
                
                autoFocus={false}
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.phoneInput}
              />
  
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
          </View>

          

          <Button title="Click me" onPress={() => navigation.navigate("incarnatorHome")} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CredentialScreen;

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor:"#fff"
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    // width: wp(),
    alignItems: "center",
    backgroundColor: "#fff",
    padding: wp(5),
  },
  headText: {
    fontWeight: "bold",
    fontSize: wp(10),
    fontFamily: "sans-serif",
    textAlign: "center",
    marginBottom: hp(2),
  },
  middleText: {
    fontFamily: "sans-serif",
    fontSize: wp(6),
    textAlign: "center",
    marginBottom: hp(2),
  },
  form: {
    width: wp(90),
  },
  label: {
    fontWeight: "bold",
    fontSize: wp(4),
    marginBottom: 5,
  },
  input: {
    height: hp(6),
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  phoneContainer: 
  { 
     width: "100%",
     height: hp(10),
     borderRadius: 10 ,
   
    },
  
  
    phoneInput: { 
    
    backgroundColor: "#fff", 
    borderRadius: 10,
    color:"black",
    borderWidth:2,
    borderColor:'#ddd'
   },
  
 
});
