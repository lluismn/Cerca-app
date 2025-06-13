import { StyleSheet, View } from "react-native";
import IncidentButton from "./IncidentButton";

type IncidentListProps = {
  category: "luz" | "agua" | "electro";
};

const INCIDENTS = {
  luz: [
    "Apagón general",
    "Apagado de una o varias luces",
    "Parpadeo de luces",
    "Salen chispas de un enchufe",
    "Interruptor no funciona",
    "Olor a quemado",
  ],
  agua: [
    "Fuga de agua",
    "Grifo goteando",
    "Inodoro atascado",
    "Ducha o bañera atascada",
    "Problemas con la caldera",
    "Agua caliente no funciona",
  ],
  electro: [
    "Equipo no enciende",
    "Equipo hace ruido extraño",
    "Equipo se calienta demasiado",
    "Equipo no enfría o calienta",
    "Fugas de agua de equipo",
    "Problemas con enchufes o cables",
  ],
};

export default function IncidentList({category}: IncidentListProps) {
    const items = INCIDENTS[category] || []; // Default to empty array if category not found

  return (
    <View style={styles.grid}>
      {items.map((item, index) => (
        <IncidentButton
          key={index}
          label={item}
          onPress={() => {console.log("Seleccionado:", item)}}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: 16,
  },
});
