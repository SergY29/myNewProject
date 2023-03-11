import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from "react-native";
//firestore
import { collection, getDocs, onSnapshot } from "firebase/firestore";
//icons
import { Feather } from '@expo/vector-icons';

import { fireStore } from '../../firebase/config';


export default function DefaultScreen({ navigation }) {
    const [posts, setPosts] = useState([])

    const getAllPosts = async () => {
        await onSnapshot(collection(fireStore, "posts"), (snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
    }

    useEffect(() => {
        getAllPosts();

    }, [])


    console.log('postScreen', posts)


    return (
        <View style={styles.container}>
            <FlatList data={posts} keyExtractor={(item, idx) => idx.toString()}
                renderItem={({ item }) =>
                (<View>
                    <Image sourse={{ uri: item.picture }} style={{
                        height: 240, width: "100%", borderColor: '#fafa', borderWidth: 3, marginTop: 32, borderRadius: 10,
                    }} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textAbouPhoto}>
                            {item.about}
                        </Text>
                    </View>
                    <View style={styles.navPost}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Comments',
                            { urlImage: item.picture, postId: item.id })}>
                            <Feather name="message-square" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Map', { location: item.location })}>
                            <Feather name="map-pin" size={24} color="black" />
                        </TouchableOpacity>
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
        backgroundColor: "#fff",
    },
    textContainer: {
        marginTop: 8,
        marginBottom: 10,
    },
    textAbouPhoto: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
    },
    navPost: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});