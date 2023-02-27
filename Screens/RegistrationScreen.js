import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
    ImageBackground, StyleSheet, Text, TextInput, View, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';

const initialState = {
    login: '',
    email: '',
    password: '',
}

export default function RegistrationScreen() {
    const [state, setState] = useState(initialState);

    const onSubmit = () => {
        console.log(state);
        setState(initialState)
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/photo_bg.jpg')} style={styles.image}>
                    <StatusBar style="auto" />

                    <View style={styles.regContainer}>
                        <Text style={styles.title}>Регистрация</Text>
                        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                            <View style={styles.form}>
                                <TextInput
                                    value={state.login}
                                    onChangeText={(value) => setState((prevState) => ({ ...prevState, login: value }))}
                                    placeholder="Логин"
                                    style={styles.input}
                                />
                                <TextInput
                                    value={state.email}
                                    onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                                    placeholder="Адрес электронной почты"
                                    style={styles.input}
                                />
                                <TextInput
                                    value={state.password}
                                    onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                                    placeholder="Пароль"
                                    secureTextEntry={true}
                                    style={styles.input}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onSubmit}>
                                    <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                        <Text style={styles.textRegister}>Уже есть аккаунт? Войти</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FFCC',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 30,
        marginTop: 92,
        marginBottom: 33,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    regContainer: {
        flex: 0.7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    form: {
        marginHorizontal: 16,
    },
    input: {
        height: 50,
        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E8E8E8",
        marginBottom: 16,
        color: '#BDBDBD',
    },
    button: {
        backgroundColor: '#FF6C00',
        alignItems: 'center',
        borderRadius: 100,
        padding: 0,
        marginTop: 27,
    },
    btnTitle: {
        color: '#fff',
        paddingBottom: 16,
        paddingTop: 16,
    },
    textRegister: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 16,

    }
});
