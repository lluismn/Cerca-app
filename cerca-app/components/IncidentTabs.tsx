import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import BackButton from "./backButton";
import ContactProfesional from "./contactProfesional";
import IncidentList from "./IncidentList";

const TABS = [
  {
    key: "luz",
    label: "Luz y electricidad",
    icon: require("../assets/images/incidents/luz.png"),
    iconActive: require("../assets/images/incidents/luz_active.png"),
  },
  {
    key: "agua",
    label: "Agua y tuberías",
    icon: require("../assets/images/incidents/agua.png"),
    iconActive: require("../assets/images/incidents/agua_active.png"),
  },
  {
    key: "electro",
    label: "Electrodomésticos",
    icon: require("../assets/images/incidents/electro.png"),
    iconActive: require("../assets/images/incidents/electro_active.png"),
  },
];

export default function IncidentTabs() {
  const [activeTab, setActiveTab] = useState<'luz' | 'agua' | 'electro'>("luz");
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.tabs}>
          {TABS.map((tab) => (
            <Pressable
              key={tab.key}
              onPress={() => setActiveTab(tab.key as 'luz' | 'agua' | 'electro')}
              style={[
                styles.tabButton,
                activeTab === tab.key && styles.tabButtonActive,
              ]}
            >
              <Image
                source={activeTab === tab.key ? tab.iconActive : tab.icon}
                style={styles.icon}
              />
              <AppText
                style={[
                  styles.tabText,
                  activeTab === tab.key && styles.tabTextActive,
                ]}
              >
                {tab.label}
              </AppText>
            </Pressable>
          ))}
        </View>
        <View>
            <IncidentList category={activeTab} />
        </View>
        <AppText style={{ fontSize: 14, color: "#5C5C5C" }}>
          ¿No encuentras tu incidencia exacta? Contacta con un profesional para
          una ayuda personalizada.
        </AppText>
        <View style={{ paddingHorizontal: 10 }}>
          <ContactProfesional />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 3,
    marginBottom: 24,
  },
  tabButton: {
    gap: 1,
    padding: 10,
    borderRadius: 12,
    color: "#FFFFFF ",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabButtonActive: {
    backgroundColor: "rgba(95, 133, 178, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 14,
    textAlign: "center",
    color: "#494949",
  },
  tabTextActive: {
    fontWeight: "bold",
    color: "#2C4772",
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 6,
    resizeMode: "contain",
  },
  scroll: {
    paddingBottom: 120,
    gap: 16,
  },
});
