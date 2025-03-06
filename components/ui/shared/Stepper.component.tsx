import { Platform, StyleSheet, View } from "react-native";
import { ProgressBar, Text } from "react-native-paper";

interface BBStepperProps {
  totalSteps: number;
  currentStep: number;
}

export default function BBStepper({ currentStep, totalSteps }: BBStepperProps) {
  const isWeb = Platform.OS === "web";
  return (
    <View style={styles(isWeb).mainContainer}>
      <View style={styles(isWeb).indicatorContainer}>
        <ProgressBar
          style={styles(isWeb).indicator}
          progress={currentStep / totalSteps}
          color="#008392"
        />
      </View>

      <Text style={styles(isWeb).indicatorTextStepStyle}>
        Paso {currentStep} de {totalSteps}
      </Text>
    </View>
  );
}

const styles = (isWeb: boolean) =>
  StyleSheet.create({
    mainContainer: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingRight: !isWeb ? 16 : 0,
      paddingLeft: !isWeb ? 16 : 0,
      flexDirection: "row",
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      backgroundColor: "white",
    },
    indicatorContainer: {
      height: 4,
      flex: 1,
    },
    indicator: {
      borderRadius: 8,
      backgroundColor: "#DEE3E3",
    },
    indicatorTextStepStyle: {
      fontFamily: "Lexend_400Regular",
      fontSize: 14,
      color: "#6C757D",
      lineHeight: 21,
      textAlign: "center",
    },
  });
