import { LucideX } from "lucide-react-native";
import { StyleSheet, View, ViewProps } from "react-native";
import { Text } from "react-native-paper";

interface BBWebNotificationProps extends ViewProps {}

export default function BBWebNotification({ children }: ViewProps) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContainerTextsContainer}>{children}</View>
      <LucideX />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  mainContainerTextsContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
