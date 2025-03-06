import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import InvoiceTransferAmount from "./invoiceDetailTransferAmount.mobile.page";
import InvoiceDetailToWhom from "./invoiceDetailToWhom.mobile.page";
import InvoiceDetailTransfer from "./invoiceDetailsTransfer.mobile.page";
import { Text } from "react-native-paper";

const BB_LOGO_IMG = "@assets/images/svg/logo_bolivariano.svg";

export default function InvoiceDetailPage() {
  return (
    <View style={[styles.mainContainer]}>
      <View style={styles.mainContainerSubHeader}>
        <Image style={styles.headerLogo} source={require(BB_LOGO_IMG)} />
      </View>
      <InvoiceTransferAmount />
      <InvoiceDetailToWhom />
      <View id="Divider" style={styles.mainContainerDivider} />
      <InvoiceDetailTransfer />
      <View id="Divider" style={styles.mainContainerDivider} />
      <Text style={styles.mainContainerTransferTextMessage}>
        La transferencia se realizará de inmediato.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 16,
    gap: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#CED4DA",
  },
  mainContainerDivider: {
    borderColor: "#CED4DA",
    borderWidth: 1,
  },
  mainContainerSubHeader: {
    alignItems: "center",
    padding: 16,
    borderBottomColor: "#CED4DA",
    borderBottomWidth: 1,
  },
  headerLogo: {
    width: 175,
    height: 27,
  },
  mainContainerTransferTextMessage: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    lineHeight: 21,
    color: "#495057",
    textAlign: "center",
  },
});
