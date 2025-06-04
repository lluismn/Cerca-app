import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo_cerca.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <AppText style={styles.greeting}>¡Hola!</AppText>
      <AppText style={styles.question}>¿Qué necesitas?</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 32,
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 32,
    fontWeight: "medium",
    color: "#fff",
  },
  question: {
    fontSize: 32,
    fontWeight: "medium",
    color: "#fff",
    marginTop: 4,
  },
});
