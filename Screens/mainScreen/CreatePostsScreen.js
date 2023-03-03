import { View, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

//icons
import { AntDesign } from '@expo/vector-icons';


export default function CreatePostsScreen() {
    return (
        <View style={styles.container}>
            <Camera style={styles.camera}>
                <TouchableOpacity style={styles.textCamera} onPress={() => { }}>
                    <AntDesign name="camerao" size={35} color="white" />
                </TouchableOpacity>
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    camera: {
        height: 240,
        marginTop: 32,
        marginHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    textCamera: {
        paddingTop: 13,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
    }
});

