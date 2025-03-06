import { Text } from "react-native-paper";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import BBHeader from "@/components/ui/shared/Header.component";
import BBNumberInput from "@/components/ui/shared/NumberInput.component";
import BBStepper from "@/components/ui/shared/Stepper.component";
import { ArrowLeft, LucideArrowLeft, LucideLogOut } from "lucide-react-native";
import BBChip from "@/components/ui/shared/Chips.component";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import BBCard from "@/components/ui/shared/Card.component";
import BBLinkButton from "@/components/ui/shared/LinkButton.component";
import { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import BBButton from "@/components/ui/shared/Button.component";
import { useRouter } from "expo-router";

export default function SimulatorPage() {
  const router = useRouter();

  // * ---- Clicked Chip ----
  const chips = [
    {
      key: 0,
      value: "12",
    },
    {
      key: 1,
      value: "24",
    },
    {
      key: 2,
      value: "36",
    },
  ];

  const [selectedChip, setSelectedChip] = useState<{
    key: number;
    value: string;
  } | null>(null);
  // * ---- Animation Height -----
  const [viewMore, setViewMore] = useState(false);

  const viewMoreHeight = useSharedValue(0);

  const viewMoreAnimatedStyle = useAnimatedStyle(() => ({
    height: viewMoreHeight.value,
    width: "100%",
    overflow: "hidden",
    gap: 8,
  }));

  const toggleViewMore = () => {
    if (viewMore) {
      viewMoreHeight.value = withTiming(0, { duration: 300 });
    } else {
      viewMoreHeight.value = withTiming(70, { duration: 300 });
    }
    setViewMore(!viewMore);
  };

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
      <BBStepper totalSteps={6} currentStep={1} />
      <ContentContainer title="Calcula los pagos de tu crédito">
        <BBNumberInput
          label="Modifica tu monto"
          helperText="Solicita desde $1,000 hasta $20,000"
        />
        <Text style={styles.contentContainerSectionTitle}>Meses a pagar</Text>
        <ScrollView
          horizontal
          contentContainerStyle={styles.chipsMainContainerContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {chips.map((chip) => (
            <BBChip
              key={chip.key}
              value={chip.value}
              selected={chip.value === selectedChip?.value}
              onPress={() =>
                setSelectedChip({ key: chip.key, value: chip.value })
              }
            />
          ))}
        </ScrollView>
        {selectedChip && (
          <>
            <Text style={styles.contentContainerSectionTitle}>
              Resultado de la simulación
            </Text>
            <BBCard>
              <View style={styles.contentContainer}>
                <View style={styles.simulationContainer}>
                  <Text style={styles.simulationContainerText}>
                    Monto a recibir
                  </Text>
                  <Text style={styles.simulationValueText}>$9,950.22</Text>
                </View>
                <View style={styles.simulationContainer}>
                  <Text style={styles.simulationContainerText}>
                    Cuota mensual
                  </Text>
                  <Text style={styles.simulationValueText}>$540.89</Text>
                </View>
                <View style={styles.simulationContainer}>
                  <Text style={styles.simulationContainerText}>
                    Tasa de interés
                  </Text>
                  <Text style={styles.simulationValueText}>15.20%</Text>
                </View>

                <Animated.View style={viewMoreAnimatedStyle}>
                  <View style={styles.simulationContainer}>
                    <Text style={styles.simulationContainerText}>
                      Impuesto SOLCA
                    </Text>
                    <Text style={styles.simulationValueText}> -10.02 </Text>
                  </View>
                  <View style={styles.simulationContainer}>
                    <Text style={styles.simulationContainerText}>
                      Monto total a pagar
                    </Text>
                    <Text style={styles.simulationValueText}>$13,389.89</Text>
                  </View>
                </Animated.View>

                <View>
                  <BBLinkButton
                    children={!viewMore ? "Ver más" : "Ver menos"}
                    onPress={() => toggleViewMore()}
                    hasUnderScore
                  />
                </View>
              </View>
            </BBCard>
          </>
        )}
        <BBButton
          children="Continuar"
          onPress={() => router.push("/homeAddress")} // TODO: Revisar
          disabled={selectedChip == null}
        />
      </ContentContainer>
    </>
  );
}

const styles = StyleSheet.create({
  chipsMainContainerContent: {
    gap: 16,
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    gap: 4,
  },
  contentContainerSectionTitle: {
    fontFamily: "Lexend_400Regular",
    fontSize: 16,
    color: "#495057",
    lineHeight: 24,
  },
  simulationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  simulationContainerText: {
    fontFamily: "Lexend_400Regular",
    fontSize: 16,
    color: "#495057",
    lineHeight: 24,
  },
  simulationValueText: {
    fontFamily: "Lexend_400Regular",
    fontSize: 16,
    color: "#212529",
    lineHeight: 24,
  },
  linkButton: {
    backgroundColor: "transparent",
    color: "#008392",
  },
});
