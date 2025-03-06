import BBButton from "@/components/ui/shared/Button.component";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import { CreditScoreAnimation } from "@/components/ui/shared/CreditScore.component";
import BBFooter from "@/components/ui/shared/Footer.component";
import BBHeader from "@/components/ui/shared/Header.component";
import BBLinkButton from "@/components/ui/shared/LinkButton.component";
import BBStepper from "@/components/ui/shared/Stepper.component";
import { useRouter } from "expo-router";
import { LucideLogOut } from "lucide-react-native";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function ProfileTabPage() {
  const router = useRouter();
  return (
    <>
      <BBHeader
        iconSize={24}
        trailingButtonIcon={() => (
          <LucideLogOut color={"#212529"} onPress={() => router.replace("/")} />
        )}
      />
      <BBStepper totalSteps={6} currentStep={5} />
      <ContentContainer buttons={[]}>
        <View style={styles.mainContentContainer}>
          <Text style={styles.mainContentContainerTitleText}>
            RONALD DANIEL ROMERO MORÁN
          </Text>
          <Text style={styles.mainContentContainerTitleText}>
            tu score crediticio es:
          </Text>
        </View>
        <CreditScoreAnimation score={950} />
      </ContentContainer>
      <BBFooter>
        <View style={{ flexDirection: "column", gap: 4 }}>
          <BBLinkButton
            children="Preguntas frecuentes"
            onPress={() => router.push("/(tabs)")}
          />
          <BBButton
            children="Ver informe completo"
            onPress={() => router.push("/(tabs)")}
          />
        </View>
      </BBFooter>
    </>
  );
}

const styles = StyleSheet.create({
  mainContentContainer: {
    flex: 1,
    alignItems: "center",
  },
  mainContentContainerTitleText: {
    fontFamily: "Lexend_600SemiBold",
    fontSize: 16,
    color: "#212529",
    lineHeight: 24,
  },
});
