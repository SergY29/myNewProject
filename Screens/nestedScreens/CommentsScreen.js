import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard, FlatList, SafeAreaView
} from "react-native";
import { collection, addDoc, getDocs } from "firebase/firestore";
//icons
import { AntDesign } from '@expo/vector-icons';

import { fireStore } from '../../firebase/config';


export default function CommentsScreen({ route }) {
    const [isShowKey, setIsShowKey] = useState(true);
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState([])
    //route params
    const { urlImage, postId } = route.params;
    //selector
    const { nickName } = useSelector((state) => state.auth)

    useEffect(() => {
        getAllComments();

    }, [])

    const createPost = async () => {
        setIsShowKey(false);
        Keyboard.dismiss();

        try {
            await addDoc(collection(fireStore, `posts/${postId}/comments`), {
                comment,
                nickName,
            });
            setComment('');
            getAllComments();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const getAllComments = async () => {
        const querySnapshot = await getDocs(collection(fireStore, `posts/${postId}/comments`));
        setAllComments(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

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
                <SafeAreaView style={styles.comments}>
                    <FlatList
                        data={allComments}
                        renderItem={({ item }) =>
                            <View style={styles.sectionComment}>
                                <Text style={styles.commentText} >{item.comment}</Text>
                                <View style={styles.nickNameContainer}>
                                    <Text style={styles.nickNameText} >{item.nickName}</Text>
                                </View>
                            </View>}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>

                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <View style={{ ...styles.form, paddingBottom: isShowKey ? 10 : 10 }}>
                        <View style={styles.commentsInnerButton}>
                            <TextInput
                                value={comment}
                                onChangeText={setComment}
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
    comments: {
        flex: 1,
    },
    sectionComment: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
    },
    commentText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
        lineHeight: 18,
    },
    nickNameContainer: {
        flexDirection: "row",
        justifyContent: 'flex-end',
    },
    nickNameText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 10,
        lineHeight: 12,
        color: '#BDBDBD',
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