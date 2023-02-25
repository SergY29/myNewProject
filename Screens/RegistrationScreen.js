import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function RegistrationScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/photo_bg.jpg')} style={styles.image}>
                <StatusBar style="auto" />
                <View style={styles.regContainer}>
                    <Text>Open up App.js to start working on your RegistrationScreen!!</Text>
                </View>


            </ImageBackground>
        </View>
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
    regContainer: {
        flex: 0.7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
});