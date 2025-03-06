import { LucideCircleAlert } from "lucide-react-native";
import { useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextLayoutEventData,
  View,
  ViewProps,
} from "react-native";
import { Text } from "react-native-paper";

interface BBAlertProps extends ViewProps {
  descriptionText: string;
}

export default function BBAlert(props: BBAlertProps) {
  // State to track whether the text is multi-line
  const [isMultiLine, setIsMultiLine] = useState(false);

  const handleTextLayout = (
    event: NativeSyntheticEvent<TextLayoutEventData>
  ): void => {
    const { lines } = event.nativeEvent;
    // If more than one line and not already set, update state
    if (lines.length > 1 && !isMultiLine) {
      setIsMultiLine(true);
    }
    // If only one line and state indicates multi-line, revert back
    else if (lines.length === 1 && isMultiLine) {
      setIsMultiLine(false);
    }
  };

  return (
    <View {...props} style={[styles.mainContainer, props.style]}>
      <LucideCircleAlert
        style={{
          alignSelf: isMultiLine ? "flex-start" : "center",
          marginTop: isMultiLine ? 4 : 0,
        }}
        size={16}
        color={"#3B82F6"}
      />

      <Text
        style={styles.mainContainerTextDescription}
        onTextLayout={handleTextLayout}
      >
        {props.descriptionText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    gap: 8,
    padding: 12,
    backgroundColor: "#DBEAFE",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3B82F6",
    alignItems: "center",
  },
  mainContainerTextDescription: {
    alignItems: "flex-start",
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#121417",
    lineHeight: 21,
  },
});
