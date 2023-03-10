import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard,
} from "react-native";
//icons
import { AntDesign } from '@expo/vector-icons';







export default function CommentsScreen() {
    const [isShowKey, setIsShowKey] = useState(false);
    const [commemt, setCommemt] = useState('');


    const onPushWithoutInput = () => {
        Keyboard.dismiss();
        setIsShowKey(false);
    }

    const sendComment = () => {
        setIsShowKey(false);
        Keyboard.dismiss();
        setCommemt('');
    }

    return (
        <TouchableWithoutFeedback onPress={onPushWithoutInput}>
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <View style={{ ...styles.form, paddingBottom: isShowKey ? 10 : 16 }}>
                        {/* <Image sourse={{ uri: picture }} style={{
                                height: 240, width: "100%", borderColor: '#fafa', borderWidth: 3, marginTop: 32,
                                marginBottom: 10,
                            }} /> */}
                        <View style={styles.commentsInnerButton}>
                            <TextInput
                                value={commemt}
                                onChangeText={(value) => setCommemt(value)}
                                placeholder="Комментировать..."
                                style={styles.input}
                            />
                            <TouchableOpacity activeOpacity={0.8} style={styles.buttonSend} onPress={sendComment}>
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
        // alignItems: "center",
        justifyContent: 'flex-end',
        backgroundColor: "#fff",
    },
    form: {
        marginHorizontal: 16,
    },
    commentsInnerButton: {
        position: 'relative',
        // alignItems: "center",
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