import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { storage } from '../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
//icons
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function CreatePostsScreen({ navigation }) {
    const [camera, setCamera] = useState(null);
    const [picture, setPicture] = useState(null)

    const [isShowKey, setIsShowKey] = useState(false);

    const [about, setAbout] = useState('');
    const [location, setLocation] = useState('');

    const [type, setType] = useState(Camera.Constants.Type.back);
    //premissions
    const [hasPermission, setHasPermission] = useState(null);


    useEffect(() => {
        (async () => {



            const { status } = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();
            await Location.requestForegroundPermissionsAsync();
            setHasPermission(status === "granted");
        })();


    }, []);


    if (hasPermission === null) {
        return <View />;

    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const uploadFotoToServer = async () => {
        const response = await fetch(picture);
        const file = await response.blob();

        const postId = Date.now().toString();
        const storageRef = ref(storage, `postImage/${postId}`);

        await uploadBytes(storageRef, `${file}`);

        const starsRef = ref(storage, `postImage/${postId}`);
        const processedPhoto = await getDownloadURL(starsRef)
        console.log('processedPhoto', processedPhoto)

    }


    const takePhoto = async () => {
        const { uri } = await camera.takePictureAsync();
        const locationValue = await Location.getCurrentPositionAsync();
        setLocation(locationValue)
        setPicture(uri);
        console.log("photo", uri)
    }

    const sendPhoto = async () => {
        try {
            uploadFotoToServer();
            navigation.navigate("DefaultScreen", {
                picture,
                about,
                location,
            });
            setIsShowKey(false);
            Keyboard.dismiss();
            setPicture(null);
            setAbout('');
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

    const onPushWithoutInput = () => {
        Keyboard.dismiss();
        setIsShowKey(false);
    }

    return (
        <TouchableWithoutFeedback onPress={onPushWithoutInput}>
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <View style={{ ...styles.form, paddingBottom: isShowKey ? 10 : 120 }}>
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
                                marginBottom: 10,
                            }} />
                        }
                        <View>
                            <TextInput
                                value={about}
                                onChangeText={(value) => setAbout(value)}
                                placeholder="Название..."
                                style={styles.input}
                            />
                        </View>
                        <TextInput
                            placeholder="Местность..."
                            style={styles.input}
                        />
                        <TouchableOpacity activeOpacity={0.8} style={{ ...styles.buttonPublish, backgroundColor: picture ? '#FF6C00' : '#F6F6F6' }} onPress={sendPhoto}>
                            <Text style={{ ...styles.title, color: picture ? '#fff' : '#BDBDBD' }}>Опубликовать</Text>
                        </TouchableOpacity>

                    </View>
                </KeyboardAvoidingView>
            </View >
        </TouchableWithoutFeedback >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
    },
    camera: {
        height: 240,
        marginTop: 32,
        marginBottom: 10,
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
        marginTop: 40,
    },
    input: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        height: 50,
        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 16,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 2,
        marginBottom: 16,
        color: '#BDBDBD',

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



