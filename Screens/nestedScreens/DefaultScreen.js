import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Button, Text } from "react-native";
//firestore
import { collection, getDocs } from "firebase/firestore";

import { fireStore } from '../../firebase/config';


export default function DefaultScreen({ navigation }) {
    const [posts, setPosts] = useState([])

    const getAllPosts = async () => {
        const querySnapshot = await getDocs(collection(fireStore, "posts"));
        setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    useEffect(() => {
        console.log('j,yjdkztvcz')
        getAllPosts();

    }, [])

    if (posts) {
        console.log('postScreen', posts)
    }

    return (
        <View style={styles.container}>
            <FlatList data={posts} keyExtractor={(item, idx) => idx.toString()}
                renderItem={({ item }) =>
                (<View>
                    <Image sourse={{ uri: item.picture }} style={{
                        height: 240, width: "100%", borderColor: '#fafa', borderWidth: 3, marginTop: 32,
                    }} />
                    <View>
                        <Text>
                            {item.about}
                        </Text>
                    </View>
                    <View>
                        <Button title="Map" onPress={() => navigation.navigate('Map', { location: item.location })} />
                        <Button title="Comments" onPress={() => navigation.navigate('Comments', { urlImage: item.picture })} />
                    </View>
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