import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard,
} from "react-native";
import { collection, getDocs, addDoc } from "firebase/firestore";
//icons
import { AntDesign } from '@expo/vector-icons';

import { fireStore } from '../../firebase/config';


export default function CommentsScreen({ route }) {
    const [isShowKey, setIsShowKey] = useState(true);
    const [commemt, setCommemt] = useState('');
    //route params
    const { urlImage, postId } = route.params;
    //selector
    const { nickName } = useSelector((state) => state.auth)



    const createPost = async () => {
        setIsShowKey(false);
        Keyboard.dismiss();

        try {
            await addDoc(collection(fireStore, `posts/${postId}/comments`), {
                commemt,
                nickName,
            });
            setCommemt('');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const onPushWithoutInput = () => {
        Keyboard.dismiss();
        setIsShowKey(false);
    }

    return (
        <TouchableWithoutFeedback onPress={onPushWithoutInput}>
            <View style={styles.container}>
                <Image sourse={{ uri: urlImage }} style={{
                    height: 240, width: "100%", borderColor: '#fafa', borderWidth: 3,
                    marginBottom: 32,
                }} />

                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <View style={{ ...styles.form, paddingBottom: isShowKey ? 10 : 10 }}>


                        <View style={styles.commentsInnerButton}>
                            <TextInput
                                value={commemt}
                                onChangeText={(value) => setCommemt(value)}
                                placeholder="Комментировать..."
                                style={styles.input}
                            />
                            <TouchableOpacity activeOpacity={0.8} style={styles.buttonSend} onPress={createPost}>
                                <AntDesign name="arrowup" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View >
        </TouchableWithoutFeedback >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'flex-end',
        backgroundColor: "#fff",
    },

    form: {
    },
    commentsInnerButton: {
        justifyContent: 'center',
    },
    input: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        lineHeight: 19,

        height: 50,
        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 16,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#E8E8E8",

        backgroundColor: '#F6F6F6',
        color: '#BDBDBD',

    },
    buttonSend: {
        position: 'absolute',
        right: 8,
        padding: 10,

        borderRadius: 50,
        backgroundColor: "#FF6C00",
    },
})