import { React, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";


export default function PostsScreen({ route }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (route.params) {
            setPosts(prevState => [...prevState, route.params])
        }

    }, [route.params])

    if (route.params) {
        console.log("route.params.picture", route.params.picture)
    }

    return (
        <View style={styles.container}>
            <Text>PostsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
});