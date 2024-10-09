import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Header from '@mindinventory/rn-top-navbar';

import PhoneInput from 'react-native-phone-input'

import CountryPicker from 'react-native-country-picker-modal';


export default function Signup({ navigation }) {
  const [fieldValues, setFieldValues] = useState({ name: '', email: '', phoneno: '', password: '' })
  const phoneInput = useRef<PhoneInput>(null);
  const [userphoneNumber, setUserphoneNumber] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [country, selectCountry] = useState('in')
	const [countryPhoneSuboptions, setCountryPhoneSuboptions] = useState({
		open: false,
		options: []
	})
  const [countryModalOpen, setCountryModalOpen] = useState(false);
  const [cca2, setcca2] = useState({
    cca2: 'IN',
    value: '91'
    })


  const onChangeText = (val, key) => {
    setFieldValues((prev) => ({
      ...prev,
      [key]: val,
    }))
  }
  const onPhoneInputChange = (val) => {
    console.log('fieldValues')
    // setFieldValues((prev) => ({
    //   ...prev,
    //   [key]: [val],
    // }))
  }


  const handleBack = () => {
    navigation.goBack()
  }

  const goSignin = () => {
    navigation.navigate('signin')
  }

  const handleSubmit = () => {

    if(fieldValues.password != confirmPassword){
      alert('Password and confirm password should be same')
      return
    }
    
    console.log(fieldValues)
    console.log(confirmPassword)
  }
  const handleChangeNumber = (number: any) => {
   
    setFieldValues((prev) => ({
      ...prev,
      ['phoneno']: number,
    }))
	}

  const handleOpenDropdown = (number: any) => {
    setCountryModalOpen(true)
	}

  const handleSelectFlag = (cca2: any) => {
    setcca2({
      cca2:cca2.cca2,
      value: cca2.callingCode[0]
    })
    phoneInput.current && phoneInput.current.selectCountry(cca2.cca2.toLowerCase())
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
    inputStyle: {
			marginBottom: 20,
			borderWidth: 1,
			borderRadius: 7.6,
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
          <Text style={{ color: '#fff', fontSize: 20 }}>Sign Up</Text>
        </Header.Body>

      </Header>


      <View style={styles.container}
      >
        <TextInput
          placeholder="Full name"
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={(val) => onChangeText(val, 'name')}
          value={fieldValues.name}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={(val) => onChangeText(val, 'email')}
          value={fieldValues.email}
          style={styles.input}
        />

        <PhoneInput
          ref={phoneInput}
          countryCallingCodeEditable={false}
          onPressFlag={() => {
            handleOpenDropdown();
          }}
          onChangePhoneNumber={(text: string) => handleChangeNumber(text)}
        //  countryPickerProps={{ withAlphaFilter: true }}
          initialCountry={cca2.cca2}
          initialValue={cca2.value}
        
          style={styles.input}
          
        />
        {countryModalOpen && (
        <CountryPicker
        
          onSelect={( cca2 ) => handleSelectFlag(cca2)}
          modalProps={{
            visible: countryModalOpen,
          }}
          onChange={(value) => selectCountry(value)}
          withFilter={true}
          preferredCountries={["IN","US"]}
          placeholder= ''
          cca2={cca2.cca2}
          onClose={() => setCountryModalOpen(false)}
        />
      )}

{/*        
        <TextInput
          placeholder="Phone No"
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={(val) => onChangeText(val, 'phone')}
          value={fieldValues.phoneno}
          style={styles.input}
        /> */}
        <TextInput
          placeholder="Password"
          editable

          numberOfLines={4}
          maxLength={40}
          onChangeText={(val) => onChangeText(val, 'password')}
          value={fieldValues.password}
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          editable

          numberOfLines={4}
          maxLength={40}         
          
          onChangeText={(val) => setConfirmPassword(val)}
          value={confirmPassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.fixToText}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 14 }}>Already Have Account? <TouchableOpacity onPress={goSignin}><Text style={{ fontSize: 14 }}> Signin </Text></TouchableOpacity></Text>
      </View>


    </SafeAreaView>

  )

}