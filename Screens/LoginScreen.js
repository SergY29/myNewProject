import { useState } from 'react';
import {
    ImageBackground, StyleSheet, Text, TextInput, View, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';

const initialState = {
    login: '',
    password: '',
}

export default function LoginScreen() {
    const [state, setState] = useState(initialState);
    const [showMeaning, setShowMeaning] = useState(true);

    const onSubmit = () => {
        console.log(state);
        setState(initialState)
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/photo_bg.jpg')} style={styles.image}>
                    <View style={styles.regContainer}>
                        <Text style={styles.title}>Войти</Text>
                        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                            <View style={styles.form}>
                                <TextInput
                                    value={state.login}
                                    onChangeText={(value) => setState((prevState) => ({ ...prevState, login: value }))}
                                    placeholder="Логин"
                                    style={styles.input}
                                />
                                <View style={styles.showBtnContaener}>
                                    <TextInput
                                        value={state.password}
                                        onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                                        placeholder="Пароль"
                                        secureTextEntry={showMeaning ? true : false}
                                        style={styles.input}
                                    />
                                    <TouchableOpacity style={styles.showBtn} activeOpacity={0.8} onPress={() => setShowMeaning(!showMeaning)}>
                                        <Text style={styles.showText}>{showMeaning ? "Показать" : "Скрыть"}</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onSubmit}>
                                    <Text style={styles.btnTitle}>Войти</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                        <Text style={styles.textRegister}>Нет аккаунта? Зарегистрироваться</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
        flex: 0.6,
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
    textRegister: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,

        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 16,
        color: '#1B4371',
    }
});