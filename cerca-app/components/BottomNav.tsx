import { useRouter } from "expo-router";
import React from "react";
import { Image, Linking, Pressable, StyleSheet, View } from "react-native";
import AppText from "./AppText";

type BottomNavProps = {
  // Home version
  active: "home" | "handshake" | "call";
};

export default function BottomNav({ active }: BottomNavProps) {
  const router = useRouter();

  const items = [
    {
      key: "home",
      label: "Inicio",
      icon: require("../assets/images/bottomNav/home-home.png"),
      href: "/",
    },
    {
      key: "profesionals",
      label: "Profesionales",
      icon: require("../assets/images/bottomNav/handshake-home.png"),
      href: "/profesionales",
    },
    {
      key: "emergencia",
      label: "Emergencias",
      icon: require("../assets/images/bottomNav/call-home.png"),
      action: () => Linking.openURL("tel:112"),
    },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {items.map((item) => {
          const isActive = item.key === active;

          return (
            <Pressable
              key={item.key}
              style={styles.button}
              onPress={() =>
                item.action ? item.action() : router.push(item.href as any)
              }
            >
              <Image
                source={item.icon}
                style={[styles.icon, isActive && styles.activeIcon]}
              />
              <AppText style={[styles.label, isActive && styles.activeLabel]}>
                {item.label}
              </AppText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    backgroundColor: "rgba(226, 221, 221, 0.08)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 16,
    paddingBottom: 34,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.24,
    shadowRadius: 25,
    elevation: 8,
  },
  button: {
    alignItems: "center",
    width: "33.33%",
  },
  icon: {
    width: 32,
    height: 24,
    tintColor: "#fff",
    marginBottom: 4,
    resizeMode: "contain",
  },
  activeIcon: {
    tintColor: "#fff",
  },
  label: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
  activeLabel: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
});
