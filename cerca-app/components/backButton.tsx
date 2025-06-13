import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet } from 'react-native';
import AppText from "./AppText";

export default function BackButton() {
    const router = useRouter();

    return (
        <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
        >
            <Image 
                source={require('../assets/images/back.png')}
                style={{ width: 24, height: 24 }}
            />
            <AppText style={styles.backText}>Atrás</AppText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    backButton: {
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontSize: 14,
        color: '#464646',
    },
})