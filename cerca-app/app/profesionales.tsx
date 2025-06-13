import AppText from "@/components/AppText";
import BottomNav from "@/components/BottomNav";
import { StyleSheet, View } from "react-native";

export default function Profesionales() {
  return (
    <View
      style={styles.container}
    >
      <AppText style={{color: '#000'}}>Contacta con un profesional</AppText>
      <AppText>Pronto podrás reportar incidencias del hogar.</AppText>
      <AppText>
        Para más información, visita nuestra sección de soporte profesional.
      </AppText>
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
