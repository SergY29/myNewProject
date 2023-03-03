import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//icons import
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


import PostsScreen from './mainScreen/PostsScreen';
import CreatePostsScreen from './mainScreen/CreatePostsScreen';
import ProfileScreen from './mainScreen/ProfileScreen';

const MainTab = createBottomTabNavigator();


export default function Home({ navigation }) {

    return (
        <MainTab.Navigator initialRouteName="Posts" screenOptions={{ tabBarShowLabel: false, tabBarActiveBackgroundColor: "#FF6C00", tabBarItemStyle: { borderRadius: 30 }, width: 300 }}>
            <MainTab.Screen options={{
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
    );
};
