import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        NunitoSans: require('../assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf')
    })
    
    if (!fontsLoaded) {
        return <View />;
    }
    
    return <Slot />;
}
