import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { authLogOutUser } from "../../redux/auth/authOperations"


export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <Button title="sign out" onPress={authLogOutUser} />
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