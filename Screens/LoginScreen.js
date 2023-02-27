import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
    ImageBackground, StyleSheet, Text, TextInput, Button, Alert, View, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard,
} from 'react-native';

export default function LoginScreen() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const nameHandler = (text) => setName(text);
    const passwordHandler = (text) => setPassword(text);

    const onLogin = () => {
        console.log(`Name: ${name} Password: ${password}`);
        setName("");
        setPassword("");
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/photo_bg.jpg')} style={styles.image}>
                    <View style={styles.regContainer}>
                        <Text style={styles.title}>Вход</Text>
                        <View style={styles.form}>
                            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                                <TextInput
                                    value={name}
                                    onChangeText={nameHandler}
                                    placeholder="Логин"
                                    style={styles.input}
                                />
                                <TextInput
                                    value={password}
                                    onChangeText={passwordHandler}
                                    placeholder="Пароль"
                                    secureTextEntry={true}
                                    style={styles.input}
                                />
                                <Button title={"Login"} style={styles.input} onPress={onLogin} />
                            </KeyboardAvoidingView>
                        </View>
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
        paddingLeft: 16,
        paddingRight: 16,

    },
    input: {
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10,

    },
});