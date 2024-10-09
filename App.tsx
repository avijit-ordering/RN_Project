
import React from 'react';
import SplashScreen from './src/screens/splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';

function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="signin"
            component={Signin}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
                      name="signup"
                      component={Signup}
                      options={{
                        headerShown: false
                      }}
                    />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
