import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Image, Button, Text, TouchableOpacity } from "react-native";
//firestore
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
//icons 
import { Feather } from '@expo/vector-icons';


import { fireStore } from '../../firebase/config';


export default function ProfileScreen({ navigation }) {
    const { userId } = useSelector((state) => state.auth);
    const [userPosts, setUserPosts] = useState([])


    useEffect(() => {
        getUserPosts();
    }, [])


    const getUserPosts = async () => {
        const q = query(collection(fireStore, "posts"), where("userId", "==", userId));

        await onSnapshot(q, (snapshot) =>
            setUserPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
    }


    // console.log('на странице профиля', userPosts)

    return (
        <View style={styles.container}>
            <FlatList data={userPosts} keyExtractor={(item, idx) => idx.toString()}
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
        justifyContent: 'space-between'
    }
});