import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkIntro = async () => {
      try {

        const hasSeen = await AsyncStorage.getItem("hasSeenIntro");
        console.log("hasSeenIntro:", hasSeen);

        if (hasSeen !== "true") {
          // If the intro has been seen, navigate to the home page
          console.log("Showing intro.");
          router.replace("/intro");
        } else {
          // If the intro has not been seen, navigate to the intro page
          console.log("Intro has been seen, navigating to home.");
          router.replace("/home");
        }
      } catch (error) {
        console.error("Error checking intro status:", error);
        // In case of an error, navigate to the intro page as a fallback
        router.replace("/home");
      }
    };

    checkIntro();
  }, []);

  return null; // This component does not render anything
}
