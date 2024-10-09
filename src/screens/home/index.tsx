import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

export default function Home({navigation}){
    const  handleSignin = () => {
        navigation.navigate('signin')
    }

    const  handleSignup = () => {
      navigation.navigate('signup')
  }
   
    return(
      
      <SafeAreaView style={{flex: 1,backgroundColor: '#f3eeee'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:30}}>Hello,</Text>
        <Text style={{fontSize:30}}>Welcome To Home Screen</Text>
        <TouchableOpacity
          onPress={() => handleSignin()}
          style={{alignItems:'center', marginTop: 10, backgroundColor: 'blue', padding: 10, borderRadius: 10, width: 80}}>
          <Text style={{color:'#fff'}}>SignIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSignup()}
          style={{alignItems:'center', marginTop: 10, backgroundColor: '#fff', padding: 10, borderRadius: 10, width: 80}}>
          <Text style={{color:'#000'}}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
       
    )

}