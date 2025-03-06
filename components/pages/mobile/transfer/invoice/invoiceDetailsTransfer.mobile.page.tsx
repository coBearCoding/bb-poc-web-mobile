import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function InvoiceDetailTransfer() {
  return (
    <View style={styles.mainDetailTransferContainer}>
      <View style={styles.mainDetailTransferContainerContentContainer}>
        <Text style={styles.mainDetailTransferContainerContentTextDescription}>
          Motivo
        </Text>
        <Text style={styles.mainDetailTransferContainerContentTextTitle}>
          Cumpleaños
        </Text>
      </View>
      <View style={styles.mainDetailTransferContainerContentContainer}>
        <Text style={styles.mainDetailTransferContainerContentTextDescription}>
          Servicio financiero
        </Text>
        <Text style={styles.mainDetailTransferContainerContentTextTitle}>
          $0.00
        </Text>
      </View>
      <View style={styles.mainDetailTransferContainerContentContainer}>
        <Text style={styles.mainDetailTransferContainerContentTextDescription}>
          Fecha
        </Text>
        <Text style={styles.mainDetailTransferContainerContentTextTitle}>
          Motivo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainDetailTransferContainer: {
    flexDirection: "column",
    gap: 8,
    padding: 16,
  },
  mainDetailTransferContainerContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainDetailTransferContainerContentTextTitle: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    lineHeight: 21,
    color: "#212529",
  },
  mainDetailTransferContainerContentTextDescription: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    lineHeight: 21,
    color: "#495057",
  },
});
