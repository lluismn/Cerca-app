import { useRouter } from "expo-router";
import React from "react";
import { Image, Linking, Pressable, StyleSheet, View } from "react-native";
import AppText from "./AppText";

type BottomNavProps = {
  // Home version
  active: "home" | "app";
};

export default function BottomNav({ active }: BottomNavProps) {
  const router = useRouter();

  const isAltStyle = active !== "home";

  const items = [
    {
      key: "home",
      label: "Inicio",
      icon: isAltStyle
        ? require("../assets/images/bottomNav/home-app.png")
        : require("../assets/images/bottomNav/home-home.png"),
      href: "/home",
    },
    {
      key: "profesionals",
      label: "Profesionales",
      icon: isAltStyle
        ? require("../assets/images/bottomNav/profesional-app.png")
        : require("../assets/images/bottomNav/profesional-home.png"),
      href: "/profesionales",
    },
    {
      key: "emergencia",
      label: "Emergencias",
      icon: isAltStyle
        ? require("../assets/images/bottomNav/call-app.png")
        : require("../assets/images/bottomNav/call-home.png"),
      action: () => Linking.openURL("tel:112"),
    },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, isAltStyle && styles.altContainer]}>
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
                style={[
                  styles.icon,
                  isAltStyle && styles.iconAlt,
                  isActive && styles.activeIcon,
                  isAltStyle && isActive && styles.iconAltActive,
                ]}
              />
              <AppText
                style={[
                  styles.label,
                  isAltStyle && styles.labelAlt,
                  isActive && styles.activeLabel,
                  isAltStyle && isActive && styles.labelAltActive,
                ]}
              >
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
  altContainer: {
    backgroundColor: "#fff",
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
  iconAlt: {
    width: 32,
    height: 24,
    tintColor: "#314965",
    marginBottom: 4,
    resizeMode: "contain",
  },
  iconAltActive: {
    width: 32,
    height: 24,
    tintColor: "#314965",
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
  labelAlt: {
    fontSize: 12,
    color: "#314965",
    textAlign: "center",
  },
  labelAltActive: {
    fontSize: 12,
    color: "#314965",
    textAlign: "center",
  },
  activeLabel: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
});
