import AsyncStorage from "@react-native-async-storage/async-storage";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";
import { Slot, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    NunitoSans: require("../assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf"),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      try {
        // 1. Precarga imágenes
        await Asset.loadAsync([
          require("../assets/images/check-list.png"),
          require("../assets/images/baggage.png"),
          require("../assets/images/glosario.png"),
          require("../assets/images/logo_cerca.png"),
          require("../assets/images/warning.png"),
          require("../assets/images/emergency-call.png"),
          require("../assets/images/bottomNav/home-home.png"),
          require("../assets/images/bottomNav/profesional-home.png"),
          require("../assets/images/bottomNav/call-home.png"),
          require("../assets/background/home.png"),
          require("../assets/images/logo-intro.png"),
          require("../assets/images/bottomNav/home-app.png"),
          require("../assets/images/bottomNav/profesional-app.png"),
          require("../assets/images/bottomNav/call-app.png"),
        ]);

        // 2. Comprueba si se ha visto la intro
        const hasSeen = await AsyncStorage.getItem("hasSeenIntro");

        if (hasSeen !== "true") {
          router.replace("/intro");
        }
      } catch (error) {
        console.error("❌ Error durante la inicialización:", error);
      } finally {
        setIsReady(true); // Solo cuando todo ha terminado
      }
    };

    initApp();
  }, []);

  if (!fontsLoaded || !isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}
