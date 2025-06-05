import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function EmergencyNotice() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/warning.png')}
                style={styles.icon}
            />
            <AppText style={styles.text}>
                Llama al 112 si tienes una incidencia grave o una emergencia
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginTop: 16,
        padding: 12,
    },
    icon: {
        width: 48,
        height: 48,
        resizeMode: "contain",
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: "#FFFFFF",
    }

})