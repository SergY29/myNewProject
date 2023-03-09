import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from 'react-redux';
import { authLogOutUser } from "../../redux/auth/authOperations"


export default function ProfileScreen() {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(authLogOutUser())
    }

    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <Button title="sign out" onPress={signOut} />
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