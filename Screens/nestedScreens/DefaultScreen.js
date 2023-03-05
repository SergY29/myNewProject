import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Button, Text } from "react-native";


export default function DefaultScreen({ route, navigation }) {
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
                    <Text>
                        {item.about}
                    </Text>
                    <Button title="Map" onPress={() => navigation.navigate('Map', { location: item.location })} />
                    <Button title="Comments" onPress={() => navigation.navigate('Comments')} />
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