import { useCallback } from 'react';
import { View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './Screens/auth/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen';


SplashScreen.preventAutoHideAsync();

const AuthStack = createStackNavigator();




export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <AuthStack.Navigator>
        {/* <AuthStack.Screen name="Login" component={LoginScreen} /> */}
        <AuthStack.Screen name="Registration" component={RegistrationScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>




  );
}


    // <View View  >







