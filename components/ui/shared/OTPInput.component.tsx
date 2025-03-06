import { useRef, useState } from "react";
import {
  TextInput as NativeTextInput,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import { TextInputProps, TextInput } from "react-native-paper";

interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
  otpInputProps?: TextInputProps;
}

const OTPInput = ({ length = 4, onComplete, otpInputProps }: OTPInputProps) => {
  const [otp, setOTP] = useState(Array(length).fill(""));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputs = useRef<(NativeTextInput | null)[]>([]);
  const isWeb = Platform.OS === "web";

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];

    if (text.length === 1) {
      // Replace the current index and shift focus
      newOtp[index] = text;
      setOTP(newOtp);

      if (index < length - 1) {
        inputs.current[index + 1]?.focus();
      }
    } else if (text === "") {
      // If deleting, shift remaining digits left
      newOtp.splice(index, 1);
      newOtp.push(""); // Ensure last item stays empty
      setOTP(newOtp);

      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }

    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    } else if (
      e.nativeEvent.key !== "Backspace" &&
      otp[index] === "" &&
      index > 0
    ) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          mode="outlined"
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => (!isWeb ? handleKeyPress(e, index) : undefined)}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(null)}
          ref={(el: any) => (inputs.current[index] = el)}
          keyboardType="numeric"
          cursorColor="#000"
          outlineStyle={[
            styles.inputContainerOutline,
            { borderColor: focusedIndex === index ? "black" : "#CED4DA" },
          ]}
          maxLength={1}
          style={styles.input}
          {...otpInputProps}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    gap: 8,
  },
  input: {
    width: 48,
    height: 56,
    // marginHorizontal: 5,
    fontSize: 20,
    backgroundColor: "transparent",
    tintColor: "black",
    // borderWidth: 1,
    // borderRadius: 12,
    // textAlign: "center",
  },
  inputContainerOutline: {
    borderRadius: 12,
    borderColor: "#CED4DA",
    backgroundColor: "white",
  },
});

export { OTPInput };
