import React, { useRef } from "react";
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
import { PaperProvider, TextInput } from "react-native-paper";
import { Slot, Stack } from "expo-router";
import { StyleSheet, View, Button } from "react-native";
import BottomSheet, {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
      <GestureHandlerRootView style={styles.container}>
        {/* <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
          </Stack> */}
        <Slot />
      </GestureHandlerRootView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
