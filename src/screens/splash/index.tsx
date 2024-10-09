import React from "react";
import { ImageBackground,Text, View , StyleSheet} from "react-native";

export default function SplashScreen({navigation}){

    setTimeout(() => {
      navigation.navigate('home')
    }, 3000);
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        image: {
          flex: 1,
          justifyContent: 'center',
        },
        text: {
          color: 'white',
          fontSize: 42,
          lineHeight: 84,
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor: '#000000c0',
        },
      });
    return(
      
            <ImageBackground
             source={
                require('../../assets/splash.png')
            }
            resizeMode="cover"
            style={styles.image}
            >

            </ImageBackground>
       
    )

}