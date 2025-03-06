// // MapWrapper.js
// import { Platform } from "react-native";

// // Import native maps for iOS/Android
// import MapViewNative, { Marker as NativeMarker } from "react-native-maps";

// // Import web maps for the web
// // import MapViewWeb, {
// //   Marker as WebMarker,
// // } from "@preflower/react-native-web-maps";

// // Choose the correct component based on the platform
// // export const MapView = Platform.OS === "web" ? MapViewWeb : MapViewNative;
// // export const Marker = Platform.OS === "web" ? WebMarker : NativeMarker;
// export const MapView = MapViewNative;
// export const Marker = NativeMarker;

// app/MapComponent.tsx
import React from "react";
import { Platform, View, Text, StyleSheet } from "react-native";

export default function MapView(props: any) {
  // Only load the native module if not on web
  if (Platform.OS === "web") {
    return (
      <View style={styles.fallback}>
        <Text>Map view is not available on web.</Text>
      </View>
    );
  }

  // Dynamically require react-native-maps
  const MapView = require("react-native-maps").default;

  return <MapView style={styles.map} {...props} />;
}

const styles = StyleSheet.create({
  fallback: { flex: 1, justifyContent: "center", alignItems: "center" },
  map: { flex: 1 },
});
