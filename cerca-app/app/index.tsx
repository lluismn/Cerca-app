import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a CERCA</Text>
            <View style={styles.buttonContainer}>
                <Link href='/incidencias' asChild>
                    <Button title="Ayuda con una incidencia" />
                </Link>
                <Link href='/profesionales' asChild>
                    <Button title="Soporte profesional" />
                </Link>
                <Link href='/glosario' asChild>
                    <Button title="Glosario práctico" />
                </Link>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10,
    }
})