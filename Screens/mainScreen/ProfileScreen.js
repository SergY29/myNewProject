import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from 'react-redux';
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";

import { fireStore } from '../../firebase/config';


export default function ProfileScreen() {
    const { userId } = useSelector((state) => state.auth)


    useEffect(() => {

    }, [])


    const getUserPosts = async () => {
        const q = query(collection(fireStore, "posts"), where("userId", "==", userId));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        // const querySnapshot = await getDocs(collection(fireStore, "posts"));
    }




    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
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