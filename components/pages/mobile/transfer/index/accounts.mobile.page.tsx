import BBAvatar from "@/components/ui/shared/Avatar.component";
import BBCard from "@/components/ui/shared/Card.component";
import { LucideChevronRight } from "lucide-react-native";
import { Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function AccountsPage() {
  return (
    <>
      <BBCard variant="secondary">
        <View style={styles.mainContainer}>
          <View style={styles.mainContainerDataContainer}>
            <BBAvatar style={{ backgroundColor: "#DAEFED" }}>
              <Text style={styles.mainAvatarText}>MB</Text>
            </BBAvatar>

            <View>
              <Text style={styles.mainContainerCardTitleText}>
                Cuenta Origen
              </Text>
              <Text style={styles.mainContainerCardSupportText}>
                Ahorros: 1982379218
              </Text>
              <Text style={styles.mainContainerCardSupportText}>
                Saldo: $1290.98
              </Text>
            </View>
          </View>

          <View>
            <LucideChevronRight color={"#6C757D"} />
          </View>
        </View>
      </BBCard>
      <BBCard variant="secondary">
        <View style={styles.mainContainer}>
          <View style={styles.mainContainerDataContainer}>
            <BBAvatar style={{ backgroundColor: "#DAEFED" }}>
              <Text style={styles.mainAvatarText}>LM</Text>
            </BBAvatar>

            <View>
              <Text style={styles.mainContainerCardTitleText}>
                Cuenta de destino
              </Text>
              <Text style={styles.mainContainerCardSupportText}>
                Luis Adrián Mera Parrales
              </Text>
              <Text style={styles.mainContainerCardSupportText}>
                Ahorros *987 - Banco Bolivariano
              </Text>
            </View>
          </View>

          <View>
            <LucideChevronRight color={"#6C757D"} />
          </View>
        </View>
      </BBCard>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainAvatarText: {
    fontFamily: "Lexend_500Medium",
    fontSize: 16,
    color: "#008392",
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  mainContainerDataContainer: {
    flexDirection: "row",
    gap: 16,
  },
  mainContainerCardTitleText: {
    fontFamily: "Lexend_400Regular",
    fontSize: 16,
    color: "#212529",
    lineHeight: 24,
  },
  mainContainerCardSupportText: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#6C757D",
    lineHeight: 21,
  },
});
