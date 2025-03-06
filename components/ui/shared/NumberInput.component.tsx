import { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Platform,
  TextInputProps,
} from "react-native";
import { Text } from "react-native-paper";

export interface BBNumberInputProps extends TextInputProps {
  label?: string;
  helperText?: string;
}

const formatNumberWithCommas = (value: string) => {
  if (value === "") return "";

  // Split the value on the decimal separator.
  // We assume the user uses a period (".") as the decimal separator.
  const parts = value.split(".");

  // Remove any commas from the integer part and format it.
  const integerPart = parts[0].replace(/,/g, "");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // If there is a decimal part, remove any commas from it as well.
  if (parts.length > 1) {
    const decimalPart = parts[1].replace(/,/g, "");
    return `${formattedInteger}.${decimalPart}`;
  }

  return formattedInteger;
};

const mobileNumberInput = ({ label, helperText }: BBNumberInputProps) => {
  const [parsedValue, setParsedValue] = useState<string>("");

  const handleText = (text: string) => {
    // Remove any '$' sign and trim extra spaces.
    const cleaned = text.replace(/\$/g, "").trim();
    // Format the numeric part.
    const formatted = formatNumberWithCommas(cleaned);
    // Prepend a single '$' if there's a numeric value.
    const displayValue = formatted ? `$${formatted}` : "";
    setParsedValue(displayValue);
  };

  return (
    <View style={mobileStyles.mainContainer}>
      <Text style={mobileStyles.textInputLabel}>{label}</Text>

      <TextInput
        style={mobileStyles.mainContainerTextInput}
        value={parsedValue}
        onChangeText={handleText}
        keyboardType="numeric"
      />

      <Text style={mobileStyles.textInputHelper}>{helperText}</Text>
    </View>
  );
};
const webNumberInput = ({ label, helperText }: BBNumberInputProps) => {
  const [parsedValue, setParsedValue] = useState<string>("");

  const handleText = (text: string) => {
    const numberValue = Number(formatNumberWithCommas(text));
    if (numberValue <= 0) {
      setParsedValue(`${formatNumberWithCommas(text)}`);
    } else {
      setParsedValue(`$${formatNumberWithCommas(text)}`);
    }
  };

  return (
    <View style={webStyles.mainContainer}>
      <Text style={webStyles.textInputLabel}>{label}</Text>

      <TextInput
        style={webStyles.mainContainerTextInput}
        value={parsedValue}
        onChangeText={handleText}
        keyboardType="numeric"
      />

      <Text style={webStyles.textInputHelper}>{helperText}</Text>
    </View>
  );
};

export default function BBNumberInput(props: BBNumberInputProps) {
  const isWeb = Platform.OS === "web";
  return !isWeb ? mobileNumberInput(props) : webNumberInput(props);
}

const mobileStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  mainContainerTextInput: {
    width: 245,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#212529",
    fontFamily: "Lexend_500Medium",
    fontSize: 36,
    height: 50,
    borderBottomWidth: 1,
  },
  textInputLabel: {
    fontFamily: "Lexend_400Regular",
    fontSize: 16,
    color: "#495057",
    lineHeight: 24,
    textAlign: "center",
    paddingBottom: 24,
  },
  textInputHelper: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#6C757D",
    lineHeight: 21,
    textAlign: "center",
  },
});
const webStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  mainContainerTextInput: {
    width: 245,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#212529",
    fontFamily: "Lexend_500Medium",
    fontSize: 36,
    lineHeight: 24,
    // height: 120,
    borderBottomWidth: 1,
    outlineColor: "transparent",
  },
  textInputLabel: {
    fontFamily: "Lexend_400Regular",
    fontSize: 16,
    color: "#495057",
    lineHeight: 24,
    textAlign: "center",
  },
  textInputHelper: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#6C757D",
    lineHeight: 21,
    textAlign: "center",
  },
});
