import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from "react-native";


export default function PostsScreen({ route }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (route.params) {
            if (route.params.picture !== null) {
                setPosts(prevState => [...prevState, route.params])
            }

        }

    }, [route.params])

    if (posts) {
        console.log(posts)
    }

    return (
        <View style={styles.container}>
            <FlatList data={posts} keyExtractor={(item, idx) => idx.toString()}
                renderItem={({ item }) =>
                (<View>
                    <Image sourse={{ uri: item.picture }} style={{
                        height: 240, width: "100%", borderColor: '#fafa', borderWidth: 3, marginTop: 32,
                    }} />
                </View>)}
            />
        </View>
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