import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PostsScreen from './mainScreen/PostsScreen';
import CreatePostsScreen from './mainScreen/CreatePostsScreen';
import ProfileScreen from './mainScreen/ProfileScreen';

const MainTab = createBottomTabNavigator();


export default function Home() {

    return (
        <MainTab.Navigator>
            <MainTab.Screen name='Posts' component={PostsScreen} />
            <MainTab.Screen name='Create' component={CreatePostsScreen} />
            <MainTab.Screen name='Profile' component={ProfileScreen} />
        </MainTab.Navigator>
    );
}