import BottomNav from "@/components/BottomNav";
import Call12Button from "@/components/Call122Button";
import Header from "@/components/Header";
import OptionCard from "@/components/OptionCard";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import EmergencyNotice from "../components/EmergencyNotice";

export default function Home() {
  return (
    <ImageBackground
        source={require('../assets/background/home.png')}
        style={styles.background}
        resizeMode="cover"
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Header />
          <View style={{ marginTop: 32, gap: 24 }}>
            <OptionCard
              icon="checklist"
              title="Ayuda con una inidencia"
              description="Responde unas preguntas simples para identificar el problema y encontrar una solución paso a paso."
              href="/incidencias"
            />
            <OptionCard
              icon="baggage"
              title="Contacto con profesionales"
              description="Te guiamos para que encuentres al profesional más adecuado según el tipo de problema que tengas."
              href="/profesionales"
            />
            <OptionCard
              icon="glosario"
              title="Glosario práctico"
              description="Consulta definiciones, fotos y preguntas frecuentes para entender mejor el vocabulario del hogar."
              href="/glosario"
            />
          </View>
          <EmergencyNotice />
          <Call12Button />
        </ScrollView>
        <BottomNav active="home" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  scroll: {
    padding: 24,
    paddingBottom: 100,
    gap: 24,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
});
