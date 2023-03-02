import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from './Screens/auth/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import Home from './Screens/Home';

const AuthStack = createStackNavigator();

export const useRoute = (isAuth) => {
    return (
        < AuthStack.Navigator >
            {!isAuth &&
                <>
                    <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                    <AuthStack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen} />
                </>}
            {isAuth && <AuthStack.Screen options={{ headerShown: false }} name="Home" component={Home} />}
        </AuthStack.Navigator>
    )
}