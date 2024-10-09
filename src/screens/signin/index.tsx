import React from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, Button, Image, TouchableOpacity, Alert } from 'react-native';
import Header from '@mindinventory/rn-top-navbar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Home({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);


  const handleBack = () => {
    navigation.goBack()
  }

  const handleSubmit = () => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if(email == ''){
      alert('Please enter email');
      return
    }
    if (reg.test(email) === false) {
      alert('Enter valid email address');
      return
    }
    if(password == ''){
      alert('Please enter password');
      return
    }
   
  }

  const goSignup = () => {
    navigation.navigate('signup')
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 200,
    },
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#42A5F5',
      margin: 10,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    },
    fixToText: {
      marginBottom: 30,
      width: 160,
      alignItems: 'center',
      backgroundColor: '#2196F3',
      borderRadius: 20
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white',
    },
    tinyLogo: {
      width: 30,
      height: 30,
    },
    inputField: {

      width: 350,
      height: 55,
      backgroundColor: '#42A5F5',
      marginBottom: 25,

      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    },
    inputContainer: {




    },
    eye: {
      position: 'absolute',
      marginLeft: 320,
      marginTop: 15,
      opacity: 1
    }
  });
  return (


    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3eeee' }}>

      <Header style={{ backgroundColor: '#009999' }} statusBarBackground='#008080' barStyle='light-content'>
        <Header.Left style={{ backgroundColor: '#009999', width: "15%" }}>
          <TouchableOpacity onPress={handleBack}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/back.png')}
            />
          </TouchableOpacity>
        </Header.Left>
        <Header.Body style={{ backgroundColor: '#009999', width: "70%" }}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Sign In</Text>
        </Header.Body>

      </Header>


      <View style={styles.container}
      >
        <TextInput
          placeholder="Email"
          editable
          numberOfLines={4}
          maxLength={40}
          onChangeText={(e) => setEmail(e)}
          value={email}
          style={styles.input}
        />
        <View style={styles.inputContainer}>
          <TextInput

            placeholder="Password"
            secureTextEntry={hidePassword}

            onChangeText={(e) => setPassword(e)}
            value={password}
            style={styles.inputField}

          />
          <TouchableOpacity style={styles.eye} >
            {hidePassword ? (
              <MaterialCommunityIcons name='eye-outline' size={24} onPress={() => setHidePassword(!hidePassword)} />
            ) : (
              <MaterialCommunityIcons name='eye-off-outline' size={24} onPress={() => setHidePassword(!hidePassword)} />
            )}
          </TouchableOpacity>
        </View>




        <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.fixToText} >

          <Text style={styles.buttonText}>Submit</Text>
        </View>
        </TouchableOpacity>



        <Text style={{ fontSize: 14 }}>Don't Have Account? <TouchableOpacity onPress={goSignup}><Text style={{ fontSize: 14 }}> Signup </Text></TouchableOpacity></Text>
      </View>


    </SafeAreaView>

  )

}