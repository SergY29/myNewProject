import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const nestedScreen = createStackNavigator();


export default function PostsScreen() {

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