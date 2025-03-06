import { LucideIcon } from "lucide-react-native";
import {
  StyleSheet,
  View,
  TextInput as NativeTextInput,
  TouchableOpacity,
} from "react-native";
import { TextInput, Text, TextInputProps } from "react-native-paper";

export interface BBInputProps extends Omit<TextInputProps, "label"> {
  rightIcon?: LucideIcon;
  labelText?: string;
  trailingText?: string;
  onPressTrailing?: () => void;
}

const renderTrailingInputContent = (props: BBInputProps) => {
  if (props.rightIcon) {
    return <TextInput.Icon icon={props.rightIcon} />;
  } else {
    return undefined;
  }
};

export default function BBInputText(props: BBInputProps) {
  return (
    <View style={styles.mainContainer}>
      {/* <Text style={styles.inputContainerLabel}>{props.labelText}</Text> */}
      <View style={styles.labelContainer}>
        {props.labelText && (
          <Text style={styles.inputContainerLabel}>{props.labelText}</Text>
        )}
        {props.trailingText && (
          <TouchableOpacity onPress={props.onPressTrailing}>
            <Text style={styles.trailingButton}>{props.trailingText}</Text>
          </TouchableOpacity>
        )}
      </View>
      <TextInput
        mode="outlined"
        outlineStyle={styles.inputContainerOutline}
        style={styles.inputContainer}
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor={"#A6A6A6"}
        right={renderTrailingInputContent(props)}
        render={(innerProps) => (
          <NativeTextInput
            {...innerProps}
            style={[
              innerProps.style,
              { fontFamily: "Lexend_400Regular" }, // Apply fontFamily here
            ]}
          />
        )}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    gap: 8,
    flexDirection: "column",
    alignSelf: "stretch",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trailingButton: {
    fontFamily: "Lexend_500Medium",
    fontSize: 14,
    color: "#008392", // Use your preferred link color
    textDecorationLine: "none",
  },
  inputContainer: {
    height: 48,
    paddingTop: 0,
    paddingRight: 16,
    paddingBottom: 0,
    paddingLeft: 0,
    fontFamily: "Lexend_400Regular",
  },
  inputContainerOutline: {
    borderRadius: 12,
    borderColor: "#CED4DA",
    backgroundColor: "white",
  },
  inputContainerLabel: {
    fontFamily: "Lexend_400Regular",
    fontSize: 16,
    color: "#495057",
    lineHeight: 24,
  },
});
