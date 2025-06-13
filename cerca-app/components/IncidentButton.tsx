import { Pressable, StyleSheet } from "react-native";
import AppText from "./AppText";

type IncidentButtonProps = {
  label: string;
  onPress: () => void;
};

export default function IncidentButton({
  label,
  onPress,
}: IncidentButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '45%',
    paddingVertical: 17,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#434D58",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 6,
    minHeight: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#383838",
    textAlign: "center",
  },
});
