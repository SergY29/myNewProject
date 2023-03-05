import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//icons import
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';



import LoginScreen from './Screens/auth/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import Home from './Screens/Home';
import PostsScreen from './Screens/mainScreen/PostsScreen';
import CreatePostsScreen from './Screens/mainScreen/CreatePostsScreen';
import ProfileScreen from './Screens/mainScreen/ProfileScreen';



const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
    if (!isAuth) {
        return (
            < AuthStack.Navigator >
                <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <AuthStack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen} />

            </AuthStack.Navigator>
        )
    }
    return (
        <MainTab.Navigator initialRouteName="Posts " screenOptions={{ tabBarShowLabel: false, tabBarActiveBackgroundColor: "#FF6C00", tabBarItemStyle: { borderRadius: 30 }, width: 300 }}>
            <MainTab.Screen options={{
                headerShown: false,
                headerRight: () => (
                    <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Login')} >
                        <Feather name="log-out" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                ),
                headerTitle: "Публикации", headerTitleAlign: 'center', headerTitleStyle: {
                    fontFamily: 'Roboto-Medium',
                    fontWeight: "bold",
                    fontSize: 17,
                    color: "#212121",

                },
                headerStyle: {
                    shadowColor: " #FFFFFA4C",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                },
                tabBarIcon: ({ focused, size, color }) => (<MaterialCommunityIcons name="post-outline" size={size} color={color} />),
            }} name='Posts' component={PostsScreen} />
            <MainTab.Screen options={{
                headerTitle: "Создать публикацию", headerTitleAlign: 'center', headerTitleStyle: {
                    fontFamily: 'Roboto-Medium',
                    fontWeight: "bold",
                    fontSize: 17,
                    color: "#212121",
                },
                headerStyle: {
                    shadowColor: " #FFFFFA4C",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                },
                tabBarIcon: ({ focused, size, color }) => (<AntDesign name="pluscircleo" size={size} color={color} />)
            }} name='Create' component={CreatePostsScreen} />
            <MainTab.Screen options={{
                headerTitleAlign: 'center', headerTitleStyle: {
                    fontFamily: 'Roboto-Medium',
                    fontWeight: "bold",
                    fontSize: 17,
                    color: "#212121",
                },
                headerStyle: {
                    shadowColor: " #FFFFFA4C",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                },
                tabBarIcon: ({ focused, size, color }) => (<MaterialCommunityIcons name="face-man-profile" size={size} color={color} />)
            }} name='Profile' component={ProfileScreen} />
        </MainTab.Navigator>
    )

}