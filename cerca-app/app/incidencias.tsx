import AppText from "@/components/AppText";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { StyleSheet, View } from "react-native";

export default function Incidencias() {
  return (
    <View
      style={styles.container}
    >
      <AppText>Reportar una incidencia</AppText>
      <AppText>Pronto podrás reportar incidencias del hogar.</AppText>
      <AppText>
        Para más información, visita nuestra sección de soporte profesional.
      </AppText>
      <Header />
      <BottomNav active="app" />
    </View>
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
    }
})