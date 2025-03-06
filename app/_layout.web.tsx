import {
  Lexend_100Thin,
  Lexend_200ExtraLight,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
  Lexend_800ExtraBold,
  Lexend_900Black,
  useFonts,
} from "@expo-google-fonts/lexend";

import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import { PaperProvider } from "react-native-paper";
import { Slot } from "expo-router";
import { View } from "react-native";
import BBSidebar from "@/components/ui/web/Sidebar.componen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Lexend_100Thin,
    Lexend_200ExtraLight,
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Lexend_800ExtraBold,
    Lexend_900Black,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider>
      <Slot />
    </PaperProvider>
  );
}
