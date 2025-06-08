import AppText from "@/components/AppText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, ImageBackground, StyleSheet } from "react-native";

export default function Intro() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity value

  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(async () => {
        await AsyncStorage.setItem("hasSeenIntro", "true");
        router.replace("/home");
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ImageBackground
        source={require("../assets/background/home.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <AppText style={styles.text}>Toma el control de la situación.</AppText>
        <Image
          source={require("../assets/images/logo-intro.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "400",
    marginBottom: 150,
    marginLeft: 24,
  },
  logo: {
    width: 119,
    height: 57,
  },
});
