import React, { useState } from 'react';
import {
    ImageBackground, StyleSheet, Text, TextInput, View, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { authSingInUser } from "../../redux/auth/authOperations";

const initialState = {
    email: '',
    password: '',
}

export default function LoginScreen({ navigation }) {
    const [state, setState] = useState(initialState);
    const [isShowKey, setIsShowKey] = useState(false);
    const [showMeaning, setShowMeaning] = useState(true);

    const dispatch = useDispatch();

    const onSubmit = () => {
        setIsShowKey(false);
        Keyboard.dismiss();
        dispatch(authSingInUser(state))
        setState(initialState);
    };

    const onPushWithoutInput = () => {
        Keyboard.dismiss();
        setIsShowKey(false);
    }

    return (
        <TouchableWithoutFeedback onPress={onPushWithoutInput}>
            <ImageBackground source={require('../../assets/images/photo_bg.jpg')} style={styles.image}>
                <View style={styles.regContainer}>
                    <Text style={styles.title}>Войти</Text>
                    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                        <View style={{ ...styles.form, paddingBottom: isShowKey ? 32 : 144 }}>
                            <TextInput
                                value={state.email}
                                onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                                placeholder="Адрес электронной почты"
                                style={styles.input}
                                onFocus={() => setIsShowKey(true)}
                            />
                            <View style={styles.showBtnContaener}>
                                <TextInput
                                    value={state.password}
                                    onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                                    placeholder="Пароль"
                                    secureTextEntry={showMeaning ? true : false}
                                    style={styles.input}
                                    onFocus={() => setIsShowKey(true)}
                                />
                                <TouchableOpacity style={styles.showBtn} activeOpacity={0.8} onPress={() => setShowMeaning(!showMeaning)}>
                                    <Text style={styles.showText}>{showMeaning ? "Показать" : "Скрыть"}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onSubmit}>
                                <Text style={styles.btnTitle}>Войти</Text>
                            </TouchableOpacity>
                            <View style={styles.textContainer} >
                                <Text style={styles.textRegister}>Нет аккаунта?
                                    <Text onPress={() => navigation.navigate('Registration')}> Зарегистрироваться</Text></Text>
                            </View>
                        </View>
                    </KeyboardAvoidingView>

                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        lineHeight: 35,

        marginTop: 32,
        marginBottom: 33,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    regContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    form: {
        marginHorizontal: 16,
    },
    input: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,

        height: 50,
        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E8E8E8",
        marginBottom: 16,

        backgroundColor: '#F6F6F6',
        color: '#BDBDBD',

    },
    showBtnContaener: {
        position: "relative",
    },
    showBtn: {
        position: "absolute",
        right: 16,
        top: 16,
    },
    showText: {
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        lineHeight: 19,

        color: "#1B4371",
    },
    button: {
        backgroundColor: '#FF6C00',
        alignItems: 'center',
        borderRadius: 100,
        padding: 0,
        marginTop: 27,

    },
    btnTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,

        color: '#fff',
        paddingBottom: 16,
        paddingTop: 16,
    },
    textContainer: {
        marginTop: 16,
    },
    textRegister: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#1B4371',
    }
});