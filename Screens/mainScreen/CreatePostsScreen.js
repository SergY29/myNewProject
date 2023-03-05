import { React, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
//icons
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




export default function CreatePostsScreen({ navigation }) {

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


    }, [picture]);

    if (hasPermission === null) {
        return <View />;

    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }



    const takePhoto = async () => {
        const { uri } = await camera.takePictureAsync()
        setPicture(uri);
        console.log("photo", uri)
    }

    const sendPhoto = async () => {
        try {
            navigation.navigate('Posts', { picture });
            setPicture(null);
        } catch (error) {
        }
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
            {!picture ?
                <Camera style={styles.camera} type={type} ref={setCamera}>
                    <TouchableOpacity style={styles.buttonSnap} onPress={takePhoto}>
                        <AntDesign name="camerao" size={35} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flip} onPress={setTypeCamera}>
                        <MaterialCommunityIcons name="camera-flip-outline" size={24} color="white" />
                    </TouchableOpacity>
                </Camera>
                :

                <Image sourse={{ uri: picture }} style={{
                    height: 240, width: "100%", borderColor: '#fafa', borderWidth: 3, marginTop: 32,
                }} />

            }
            <View style={styles.form} >
                <TouchableOpacity activeOpacity={0.8} style={{ ...styles.buttonPublish, backgroundColor: picture ? '#FF6C00' : '#F6F6F6' }} onPress={sendPhoto}>
                    <Text style={{ ...styles.title, color: picture ? '#fff' : '#BDBDBD' }}>Опубликовать</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    camera: {
        height: 240,
        marginTop: 32,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
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

    form: {

    },
    buttonPublish: {
        alignItems: 'center',
        borderRadius: 100,
        padding: 0,
        marginTop: 32,
    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,

        paddingBottom: 16,
        paddingTop: 16,
    },
});





//     camera: {
//         borderRadius: 50,
//
//
//         justifyContent: "center",
//         alignItems: "center",
//     },
