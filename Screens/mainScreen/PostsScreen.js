import React from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import DefaultScreen from '../nestedScreens/DefaultScreen';
import CommentsScreen from '../nestedScreens/CommentsScreen';
import MapScreen from '../nestedScreens/MapScreen';

import { Feather } from '@expo/vector-icons';

const NestedScreen = createStackNavigator();


export default function PostsScreen({ navigation }) {
    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen options={{
                headerTitle: "Публикации",
                headerRight: () => (
                    <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Login')} >
                        <Feather name="log-out" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                ), headerTitleAlign: 'center', headerTitleStyle: {
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
            }}
                name="DefaultScreen" component={DefaultScreen} />
            <NestedScreen.Screen options={{ headerTitle: "Комментарии", }} name="Comments" component={CommentsScreen} />
            <NestedScreen.Screen options={{ headerTitle: "Карта", }} name="Map" component={MapScreen} />
        </NestedScreen.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#fff",
    },
});