import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { Slot, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    NunitoSans: require("../assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf"),
  });

  const [isCheckingIntro, setIsCheckingIntro] = useState(true);

  useEffect(() => {
    const checkIntro = async () => {
      try {
        const hasSeen = await AsyncStorage.getItem("hasSeenIntro");

        if (hasSeen !== "true") {
          router.replace("/intro");
        }
      } catch (error) {
        console.error("Error checking intro status:", error);
        // In case of an error, navigate to the intro page as a fallback;
      } finally {
        setIsCheckingIntro(false);
      }
    };
    checkIntro();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}
