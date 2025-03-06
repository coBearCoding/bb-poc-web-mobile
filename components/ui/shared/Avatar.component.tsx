import { View, StyleSheet, ViewProps } from "react-native";

export default interface BBAvatarProps extends ViewProps {}

export default function BBAvatar({ style, children }: ViewProps) {
  return (
    <View style={[styles.mainFastActionCardContainerAvatar, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  mainFastActionCardContainerAvatar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE4E4",
    width: 32,
    height: 32,
    borderRadius: 36,
  },
});
