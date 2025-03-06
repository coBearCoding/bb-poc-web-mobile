import { View, StyleSheet, ViewProps } from "react-native";

interface BBBanner extends ViewProps {}

export default function BBBanner({ children, style }: ViewProps) {
  return <View style={[styles.mainContainer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 16,
    backgroundColor: "#F2F9FA",
    flexDirection: "column",
    overflow: "hidden",
  },
});
