import GoHomeButton from "@/components/GoHomeButton";
import { StyleSheet, Text, View } from "react-native";

export default function Incidencias() {
  return (
    <View
      style={styles.container}
    >
      <Text>Reportar una incidencia</Text>
      <Text>Pronto podrás reportar incidencias del hogar.</Text>
      <Text>
        Para más información, visita nuestra sección de soporte profesional.
      </Text>
      <GoHomeButton />
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