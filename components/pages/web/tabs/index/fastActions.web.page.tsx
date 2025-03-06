import BBCard from "@/components/ui/shared/Card.component";
import {
  LucideUserSquare2,
  LucideCreditCard,
  LucideHome,
  LucideWifi,
  LucideChevronLeft,
  LucideChevronRight,
} from "lucide-react-native";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

export default function FastActionPage() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 24,
        borderRadius: 12,
        gap: 12,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.mainFastActionContainer}>
          <Text style={styles.mainSectionTextTitle}>Acciones rápidas</Text>
          <LucideChevronLeft />
          <LucideChevronRight />
        </View>
        <View style={styles.mainFastActionContainer}>
          <Text style={styles.mainFastActionButtonText}>Agregar</Text>
        </View>
      </View>
      <ScrollView horizontal contentContainerStyle={{ gap: 16 }}>
        <BBCard variant="secondary" style={{ width: 128 }}>
          <View id="mainContainer" style={styles.mainFastActionCardContainer}>
            <View
              style={
                styles.mainFastActionCardContainerAvatarDescriptionContainer
              }
            >
              <View style={styles.mainFastActionCardContainerAvatar}>
                <LucideUserSquare2 size={20} color={"#6B314F"} />
              </View>
              <Text style={styles.mainFastActionCardContainerDescription}>
                Transferir
              </Text>
            </View>
            <View>
              <Text
                style={styles.mainFastActionCardContainerDescriptionOwnerText}
              >
                Carlos Xavier
              </Text>
            </View>
          </View>
        </BBCard>
        <BBCard variant="secondary" style={{ width: 128 }}>
          <View id="mainContainer" style={styles.mainFastActionCardContainer}>
            <View
              style={
                styles.mainFastActionCardContainerAvatarDescriptionContainer
              }
            >
              <View
                style={[
                  styles.mainFastActionCardContainerAvatar,
                  { backgroundColor: "#DAEFED" },
                ]}
              >
                <LucideCreditCard size={20} color={"#006576"} />
              </View>
              <Text style={styles.mainFastActionCardContainerDescription}>
                Pagar
              </Text>
            </View>
            <View>
              <Text
                style={styles.mainFastActionCardContainerDescriptionOwnerText}
              >
                Tarjeta Visa
              </Text>
            </View>
          </View>
        </BBCard>
        <BBCard variant="secondary" style={{ width: 128 }}>
          <View id="mainContainer" style={styles.mainFastActionCardContainer}>
            <View
              style={
                styles.mainFastActionCardContainerAvatarDescriptionContainer
              }
            >
              <View
                style={[
                  styles.mainFastActionCardContainerAvatar,
                  { backgroundColor: "#E9F9CE" },
                ]}
              >
                <LucideHome size={20} color={"#374D21"} />
              </View>
              <Text style={styles.mainFastActionCardContainerDescription}>
                Pagar
              </Text>
            </View>
            <View>
              <Text
                style={styles.mainFastActionCardContainerDescriptionOwnerText}
              >
                Renta depto
              </Text>
            </View>
          </View>
        </BBCard>
        <BBCard variant="secondary" style={{ width: 128 }}>
          <View id="mainContainer" style={styles.mainFastActionCardContainer}>
            <View
              style={
                styles.mainFastActionCardContainerAvatarDescriptionContainer
              }
            >
              <View
                style={[
                  styles.mainFastActionCardContainerAvatar,
                  { backgroundColor: "#E0F3FE" },
                ]}
              >
                <LucideWifi size={20} color={"#065C86"} />
              </View>
              <Text style={styles.mainFastActionCardContainerDescription}>
                Pagar
              </Text>
            </View>
            <View>
              <Text
                style={styles.mainFastActionCardContainerDescriptionOwnerText}
              >
                Internet
              </Text>
            </View>
          </View>
        </BBCard>
        <BBCard variant="secondary" style={{ width: 128 }}>
          <View id="mainContainer" style={styles.mainFastActionCardContainer}>
            <View
              style={
                styles.mainFastActionCardContainerAvatarDescriptionContainer
              }
            >
              <View style={styles.mainFastActionCardContainerAvatar}>
                <LucideHome size={20} color={"#6B314F"} />
              </View>
              <Text style={styles.mainFastActionCardContainerDescription}>
                Transferir
              </Text>
            </View>
            <View>
              <Text
                style={styles.mainFastActionCardContainerDescriptionOwnerText}
              >
                Luz Casa
              </Text>
            </View>
          </View>
        </BBCard>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainSectionTextTitle: {
    fontFamily: "Lexend_500Medium",
    fontSize: 16,
    color: "#212529",
    lineHeight: 18,
    textAlignVertical: "center",
  },

  mainFastActionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  mainFastActionButtonText: {
    fontFamily: "Lexend_500Medium",
    fontSize: 14,
    color: "#008392",
    lineHeight: 20,
    textAlignVertical: "center",
  },
  mainFastActionCardContainer: {
    flexDirection: "column",
    gap: 12,
  },
  mainFastActionCardContainerAvatarDescriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  mainFastActionCardContainerDescription: {
    fontFamily: "Lexend_400Regular",
    fontSize: 12,
    color: "#6C757D",
    lineHeight: 18,
    textAlignVertical: "center",
  },
  mainFastActionCardContainerAvatar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE4E4",
    width: 32,
    height: 32,
    borderRadius: 36,
  },
  mainFastActionCardContainerDescriptionOwnerText: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#212529",
    lineHeight: 21,
    textAlignVertical: "center",
  },
});
