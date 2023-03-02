import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//icons import
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


import PostsScreen from './mainScreen/PostsScreen';
import CreatePostsScreen from './mainScreen/CreatePostsScreen';
import ProfileScreen from './mainScreen/ProfileScreen';

const MainTab = createBottomTabNavigator();


export default function Home() {

    return (
        <MainTab.Navigator initialRouteName="Posts" tabBarOptions={{ showLabel: false, tabBarActiveBackgroundColor: "#FF6C00", tabBarItemStyle: { borderRadius: 30, } }}>
            <MainTab.Screen options={{
                tabBarIcon: ({ focused, size, color }) => (<MaterialCommunityIcons name="post-outline" size={size} color={color} />), headerTitle: "Публикации", headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: "#f4511e",


                },
            }} name='Posts' component={PostsScreen} />
            <MainTab.Screen options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => (<AntDesign name="pluscircleo" size={size} color={color} />) }} name='Create' component={CreatePostsScreen} />
            <MainTab.Screen options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => (<MaterialCommunityIcons name="face-man-profile" size={size} color={color} />) }} name='Profile' component={ProfileScreen} />
        </MainTab.Navigator>
    );
};
