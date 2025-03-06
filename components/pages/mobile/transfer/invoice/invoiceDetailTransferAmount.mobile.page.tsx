import { LucideCheckCircle2 } from "lucide-react-native";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function InvoiceTransferAmount() {
  return (
    <View style={styles.mainContainerTransferConfirm}>
      <LucideCheckCircle2 size={40} color={"#128724"} />
      <Text style={styles.mainContainerTransferConfirmTextTitle}>
        Transferencia realizada
      </Text>
      <Text style={styles.mainContainerTransferConfirmTextValue}>$20.00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerTransferConfirm: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  mainContainerTransferConfirmTextTitle: {
    fontFamily: "Lexend_700Bold",
    fontSize: 16,
    color: "#212529",
    lineHeight: 24,
  },
  mainContainerTransferConfirmTextValue: {
    fontFamily: "Lexend_700Bold",
    fontSize: 28,
    color: "#212529",
    lineHeight: 40,
  },
});
