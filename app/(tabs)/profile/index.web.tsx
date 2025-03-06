import BBButton from "@/components/ui/shared/Button.component";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import { CreditScoreAnimation } from "@/components/ui/shared/CreditScore.component";
import BBHeader from "@/components/ui/shared/Header.component";
import BBLinkButton from "@/components/ui/shared/LinkButton.component";
import BBStepper from "@/components/ui/shared/Stepper.component";
import { useRouter } from "expo-router";
import { LucideLogOut } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function ProfileWebPage() {
  const router = useRouter();
  return (
    <>
      <BBHeader
        iconSize={24}
        trailingButtonIcon={() => <LucideLogOut color={"#212529"} />}
      />
      <ContentContainer
        title="Score crediticio"
        stepper={<BBStepper totalSteps={6} currentStep={5} />}
        buttons={
          <>
            <View>
              <BBButton
                children="Ver informe completo"
                onPress={() => router.push("/(tabs)")}
              />
            </View>
            <View>
              <BBLinkButton
                children="Preguntas frecuentes"
                onPress={() => router.push("/(tabs)")}
              />
            </View>
          </>
        }
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.mainContentContainerTitleText}>
            RONALD DANIEL ROMERO MORÁN
          </Text>
          <Text style={styles.mainContentContainerTitleText}>
            tu score crediticio es:
          </Text>
        </View>
        <CreditScoreAnimation score={900} />
      </ContentContainer>
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
