import BBCard from "@/components/ui/shared/Card.component";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function TransferDetailsPage() {
  return (
    <View style={{ gap: 8 }}>
      <BBCard variant="secondary">
        <Text style={styles.mainTextTitle}>Detalles de la transferencia</Text>
        <View style={styles.mainDetailContainer}>
          <View style={styles.mainDetailContainerContentContainer}>
            <Text style={styles.mainDetailContainerContentContainerTextTitle}>
              Monto a transferir
            </Text>
            <Text
              style={styles.mainDetailContainerContentContainerTextDescription}
            >
              $20.00
            </Text>
          </View>
          <View style={styles.mainDetailContainerContentContainer}>
            <Text style={styles.mainDetailContainerContentContainerTextTitle}>
              Motivo
            </Text>
            <Text
              style={styles.mainDetailContainerContentContainerTextDescription}
            >
              Cumpleaños
            </Text>
          </View>
          <View style={styles.mainDetailContainerContentContainer}>
            <Text style={styles.mainDetailContainerContentContainerTextTitle}>
              Servicio financiero
            </Text>
            <Text
              style={styles.mainDetailContainerContentContainerTextDescription}
            >
              $0.00
            </Text>
          </View>
        </View>
      </BBCard>
      <Text style={styles.mainDetailTextSupport}>
        Este contacto no se encuentra guardado.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTextTitle: {
    fontFamily: "Lexend_700Bold",
    fontSize: 16,
    color: "#212529",
    lineHeight: 24,
    paddingBottom: 12,
  },
  mainDetailContainer: {
    paddingBottom: 4,
    gap: 12,
  },
  mainDetailContainerContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainDetailContainerContentContainerTextTitle: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#495057",
    lineHeight: 21,
  },
  mainDetailContainerContentContainerTextDescription: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#212529",
    lineHeight: 21,
  },
  mainDetailTextSupport: {
    textAlign: "center",
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#6C757D",
    lineHeight: 21,
  },
});
