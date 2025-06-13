import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet } from "react-native";
import AppText from "./AppText";

export default function ContactProfesional() {
     const router = useRouter();

     return (
        <Pressable style={styles.button} onPress={() => router.push('/profesionales')}>
            <Image 
                source={require('../assets/images/baggage.png')}
                style={{ width: 28, height: 28, resizeMode: 'contain' }}
            />
            <AppText style={styles.text}>
                Contacta con un profesional
            </AppText>
        </Pressable>
     )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 44,
        paddingVertical: 18,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 38,
        borderColor: '#353535',
        gap: 8,

        shadowColor: 'rgba(67, 77, 88, 0.6)',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.21,
        shadowRadius: 5,
        elevation: 8,
    },
    text: {
        fontSize: 16,
        color: '#353535',
        textAlign: 'center',
    },
})