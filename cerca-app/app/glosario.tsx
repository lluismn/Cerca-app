import AppText from "@/components/AppText";
import GoHomeButton from "@/components/GoHomeButton";
import { StyleSheet, View } from "react-native";

export default function Glosario() {
  return (
    <View
      style={styles.container}
    >
      <>
        <AppText>Consulta el glosario</AppText>
        <AppText>Pronto podrás reportar incidencias del hogar.</AppText>
        <AppText>
          Para más información, visita nuestra sección de soporte profesional.
        </AppText>
      </>
      <>
        <GoHomeButton />
      </>
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