import AppText from "@/components/AppText";
import BottomNav from "@/components/BottomNav";
import IncidentTabs from "@/components/IncidentTabs";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function Incidencias() {
  return (
    <ImageBackground
      source={require("../assets/background/home.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.headerContainer}>
        <AppText style={styles.title}>Ayuda con una incidencia</AppText>
        <AppText style={styles.subtitle}>
          Selecciona el tipo de incidencia. Después, escoge lo que mejor describa tu situación.
        </AppText>
      </View>

      <IncidentTabs />

      <BottomNav active="app" />
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    padding: 20,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  scroll: {
    paddingBottom: 100,
    zIndex: 10,
  },
  headerContainer: {
    marginTop: 64,
    padding: 24,
    zIndex: 5,

  },
  title: {
    fontSize: 32,
    fontWeight: "500",
  },
  subtitle: {
    marginTop: 16,
    fontSize: 14,
  },
});
