import { StyleSheet, View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BBFooter(props: ViewProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      {...props}
      style={[
        styles.mainContainer,
        { paddingBottom: insets.bottom },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
