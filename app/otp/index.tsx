import DecreasingTimer from "@/components/pages/shared/Timer.component";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import BBHeader from "@/components/ui/shared/Header.component";
import { OTPInput } from "@/components/ui/shared/OTPInput.component";
import BBStepper from "@/components/ui/shared/Stepper.component";
import { useRouter } from "expo-router";
import { LucideArrowLeft, LucideLogOut } from "lucide-react-native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function OTPPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  return (
    <>
      <BBHeader
        iconSize={24}
        leadButtonIcon={() => (
          <LucideArrowLeft color={"#212529"} onPress={() => router.back()} />
        )}
        trailingButtonIcon={() => (
          <LucideLogOut color={"#212529"} onPress={() => router.replace("/")} />
        )}
      />
      <BBStepper totalSteps={6} currentStep={3} />
      <ContentContainer title="Ingresa el código temporal">
        <Text style={styles.descriptionText}>
          Hemos enviado un código a tu celular 09****8529
        </Text>

        <OTPInput length={6} onComplete={() => router.push("/(tabs)")} />
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Reenviar código en</Text>
        </View>
        <DecreasingTimer />
      </ContentContainer>
    </>
  );
}

const styles = StyleSheet.create({
  descriptionText: {
    marginTop: 8,
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#495059",
    lineHeight: 21,
  },
  resendContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  resendText: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#495059",
    lineHeight: 21,
  },
});
