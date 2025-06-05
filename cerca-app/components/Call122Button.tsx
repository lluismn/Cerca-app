import React from "react";
import { Image, Linking, Pressable, StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function Call12Button() {

    const handlePress = () => {
        // Open the phone dialer with the emergency number 112
        Linking.openURL('tel:112');
    }

    return (
        <Pressable style={styles.button} onPress={handlePress}>
            <Image
                source={require('../assets/images/emergency-call.png')}
                style={styles.icon}
            />
            <View style={{ flex: 1 }}>
                <AppText style={styles.text}>
                    Llamar al 112
                </AppText>
            </View>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F8F8F8',
        borderRadius: 38,
        paddingVertical: 18,
        paddingHorizontal: 19,
        gap: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 14,
        elevation: 2,
    },
    icon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 18,
        color: '#413636',

    },
})