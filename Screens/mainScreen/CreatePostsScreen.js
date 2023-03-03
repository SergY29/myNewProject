import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
//icons
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




export default function CreatePostsScreen() {
    const [camera, setCamera] = useState(null);
    const [picture, setPicture] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    //premissions
    const [hasPermission, setHasPermission] = useState(null);


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;

    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePhoto = async () => {
        const photo = await camera.takePictureAsync()

        await setPicture(photo.uri);

        console.log("photo", picture)


    }

    const setTypeCamera = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        )
    }



    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={setCamera}>
                {picture && (<View style={styles.takePhotoContainer}>
                    <Image sourse={{ uri: picture }} style={{ height: 200, width: 200 }} />
                </View>)}
                <TouchableOpacity style={styles.buttonSnap} onPress={takePhoto}>
                    <AntDesign name="camerao" size={35} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.flip} onPress={setTypeCamera}>
                    <MaterialCommunityIcons name="camera-flip-outline" size={24} color="white" />
                </TouchableOpacity>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        position: "relative",
    },
    flip: {
        position: "absolute",
        right: 20,
        bottom: 26,
    },
    buttonSnap: {
        paddingTop: 13,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    takePhotoContainer: {
        flex: 1,
        position: "absolute",
        top: 1,
        left: 1,
        borderColor: '#fff',
        borderWidth: 1,

    },
    picture: {
        backgroundColor: 'balck',
        height: 200,
        width: 200
    }
});





//     camera: {
//         borderRadius: 50,
//         height: 240,
//         marginTop: 32,
//         marginHorizontal: 16,
//         justifyContent: "center",
//         alignItems: "center",
//     },
