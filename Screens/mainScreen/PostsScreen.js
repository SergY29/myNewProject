import { View, Text, StyleSheet } from "react-native";


export default function PostsScreen({ route }) {
    console.log("route.params", route.params)
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