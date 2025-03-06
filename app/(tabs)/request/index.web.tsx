import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";
import BBSidebar from "@/components/ui/web/Sidebar.componen";
import BBInternalHeader from "@/components/ui/shared/InternalHeader.component";
import InternalContentContainer from "@/components/ui/web/InternalContentContainer";

export default function RequestWebPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const messageListener = (event: MessageEvent) => {
      // Ensure event origin is trusted
      if (event.origin !== "https://tarjetacredito.dev.cuentafuturo.com") {
        return;
      }
      // if (event.origin !== "http://localhost:3000") {
      //   return;
      // }

      try {
        const data = event.data;

        if (data.type === "EXIT") {
          router.replace("/(tabs)");
        }

        if (data.type === "NAVIGATION_STATE") {
          setCanGoBack(data.canGoBack);
        }
      } catch (error) {
        console.warn("Error parsing message:", error);
      }
    };

    window.addEventListener("message", messageListener);

    // Cleanup
    return () => window.removeEventListener("message", messageListener);
  }, [router]);

  return (
    <View>
      <BBInternalHeader />
      <BBSidebar />
      <InternalContentContainer
        bodyStyles={{ padding: 0, marginVertical: 0 }}
        mainContainerStyles={{ padding: 0 }}
      >
        <View style={styles.container}>
          <iframe
            ref={iframeRef}
            src="https://tarjetacredito.dev.cuentafuturo.com"
            // src="http://localhost:3000"
            width={width - 105}
            height={height}
            style={styles.iframe}
          />
        </View>
      </InternalContentContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  iframe: {
    borderWidth: 0,
  },
});
