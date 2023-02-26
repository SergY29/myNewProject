import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
    ImageBackground, StyleSheet, Text, TextInput, View, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';

export default function RegistrationScreen() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const nameHandler = (text) => setName(text);
    const mailHandler = (text) => setMail(text);
    const passwordHandler = (text) => setPassword(text);

    const onPress = () => {
        console.log(`Name: ${name} Email: ${mail} Password: ${password}`);
        setName("");
        setMail("");
        setPassword("");
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/photo_bg.jpg')} style={styles.image}>
                    <StatusBar style="auto" />
                    <View style={styles.regContainer}>
                        <Text style={styles.title}>Регистрация</Text>
                        <View style={styles.form}>
                            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                                <TextInput
                                    value={name}
                                    onChangeText={nameHandler}
                                    placeholder="Логин"
                                    style={styles.input}
                                />
                                <TextInput
                                    value={mail}
                                    onChangeText={mailHandler}
                                    placeholder="Адрес электронной почты"
                                    style={styles.input}
                                />
                                <TextInput
                                    value={password}
                                    onChangeText={passwordHandler}
                                    placeholder="Пароль"
                                    secureTextEntry={true}
                                    style={styles.input}
                                />
                                <TouchableOpacity style={styles.button} onPress={onPress}>
                                    <Text style={styles.textButton}>Зарегистрироваться</Text>
                                </TouchableOpacity>
                            </KeyboardAvoidingView>
                        </View>
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
    },
    regContainer: {
        flex: 0.7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
    },
    form: {
        width: "100%",
        paddingHorizontal: 16,
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
        marginTop: 27

    },
    textButton: {
        color: '#fff',
        paddingBottom: 16,
        paddingTop: 16,
    },
    textRegister: {
        paddingTop: 16,
    }
});
