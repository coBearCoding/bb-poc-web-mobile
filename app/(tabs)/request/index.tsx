import {
  WebView,
  WebViewMessageEvent,
  WebViewNavigation,
} from "react-native-webview";
import Constants from "expo-constants";
import {
  BackHandler,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";

export default function TabsIndex() {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  const router = useRouter();

  const webViewRef = useRef<WebView>(null);

  const [canGoBack, setCanGoBack] = useState(false);

  const onNavigationStateChange = (navState: WebViewNavigation) => {
    setCanGoBack(navState.canGoBack);
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          if (canGoBack && webViewRef.current) {
            // If there's history in the WebView, go back within it
            webViewRef.current.goBack();
            return true; // Prevent default (exiting the screen)
          } else {
            // Otherwise, go back at the React Navigation level
            // or return false to let the system handle it (exit app/screen)
            navigation.goBack();
            return true;
          }
        }
      );

      // Cleanup the event listener on unmount
      return () => backHandler.remove();
    }
  }, [canGoBack, navigation]);

  const onMessage = (event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);

      if (data.type === "EXIT") {
        // For example: navigate to "Home" screen (adjust to your needs)
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.warn("Error parsing message:", event.nativeEvent.data, error);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <WebView
          style={[styles.webView, { marginTop: insets.top }]}
          source={{ uri: "https://tarjetacredito.dev.cuentafuturo.com" }}
          // source={{ uri: "http://localhost:3000" }}
          javaScriptEnabled={true}
          onNavigationStateChange={onNavigationStateChange}
          onMessage={onMessage}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1 },
  keyboardContainer: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});
