import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function InvoiceDetailToWhom() {
  return (
    <View style={styles.mainContainerFromToContainer}>
      <View style={styles.mainContainerFromContainer}>
        <Text style={styles.mainContainerFromContainerTextDescription}>
          Para
        </Text>
        <Text style={styles.mainContainerFromContainerTextTitle}>
          Luis Adrián Mera Banda
        </Text>
        <Text style={styles.mainContainerFromContainerTextSupport}>
          Ahorros*678 - Banco Bolivariano
        </Text>
      </View>
      <View>
        <Text style={styles.mainContainerFromContainerTextDescription}>De</Text>
        <Text style={styles.mainContainerFromContainerTextTitle}>
          Carlos Alejandro Rodríguez López
        </Text>
        <Text style={styles.mainContainerFromContainerTextSupport}>
          Ahorros*218 - Banco Bolivariano
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerFromToContainer: {
    padding: 16,
    paddingTop: 8,
    flexDirection: "column",
    gap: 16,
    alignItems: "flex-start",
  },
  mainContainerFromContainer: {
    flexDirection: "column",
  },
  mainContainerFromContainerTextTitle: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    lineHeight: 21,
    color: "#212529",
  },
  mainContainerFromContainerTextDescription: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#495057",
    lineHeight: 21,
  },
  mainContainerFromContainerTextSupport: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    lineHeight: 21,
    color: "#6C757D",
  },
});
