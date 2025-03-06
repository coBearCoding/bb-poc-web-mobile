import BBCard from "@/components/ui/shared/Card.component";
import { LucideEye, LucideChevronDown } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function RecentActivityPage() {
  return (
    <BBCard variant="secondary">
      <View style={styles.mainContainer}>
        <View style={styles.mainContainerTitleContainer}>
          <View style={styles.mainContainerTitleContainerContentTitle}>
            <Text style={styles.mainContentTitleContainerContentTitleText}>
              Recientes
            </Text>
            <LucideEye color={"#008392"} />
          </View>
          <View style={styles.mainContainerTitleContainerContentTitle}>
            <Text
              style={styles.mainContentTitleContainerContentDescriptionText}
            >
              Todos
            </Text>
            <LucideChevronDown color={"#008392"} />
          </View>
        </View>
        <View style={{ paddingTop: 12, gap: 8 }}>
          <View style={styles.mainContainerTableContainer}>
            <View>
              <Text style={styles.mainContainerTableContainerTextTitle}>
                Transferencia interbancaria
              </Text>
              <Text style={styles.mainContainerTableContainerTextSupport}>
                28 nov. 2024 - 18:30
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.mainContainerTableContainerTextDescription,
                  { color: "#128724" },
                ]}
              >
                + $25.00
              </Text>
            </View>
          </View>
          <View style={styles.mainContainerTableContainer}>
            <View>
              <Text style={styles.mainContainerTableContainerTextTitle}>
                Transferencia interbancaria
              </Text>
              <Text style={styles.mainContainerTableContainerTextSupport}>
                28 nov. 2024 - 18:30
              </Text>
            </View>
            <View>
              <Text style={[styles.mainContainerTableContainerTextDescription]}>
                - $25.00
              </Text>
            </View>
          </View>
          <View style={styles.mainContainerTableContainer}>
            <View style={{ width: 266 }}>
              {/*TODO: Dificulta lo responsive */}
              <Text style={styles.mainContainerTableContainerTextTitle}>
                Transferencia interbancaria
              </Text>
              <Text style={styles.mainContainerTableContainerTextSupport}>
                28 nov. 2024 - 18:30
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.mainContainerTableContainerTextDescription,
                  { color: "#128724" },
                ]}
              >
                + $25.00
              </Text>
            </View>
          </View>
          <View style={styles.mainContainerTableContainer}>
            <View>
              <Text style={styles.mainContainerTableContainerTextTitle}>
                Transferencia interbancaria
              </Text>
              <Text style={styles.mainContainerTableContainerTextSupport}>
                28 nov. 2024 - 18:30
              </Text>
            </View>
            <View>
              <Text style={[styles.mainContainerTableContainerTextDescription]}>
                - $25.00
              </Text>
            </View>
          </View>
        </View>
      </View>
    </BBCard>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
    gap: 12,
  },
  mainContainerTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContainerTitleContainerContentTitle: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  mainContentTitleContainerContentTitleText: {
    fontFamily: "Lexend_600SemiBold",
    fontSize: 18,
    color: "#212529",
    lineHeight: 30,
  },
  mainContentTitleContainerContentDescriptionText: {
    fontFamily: "Lexend_500Medium",
    fontSize: 14,
    color: "#008392",
    lineHeight: 20,
  },

  mainContainerTableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  mainContainerTableContainerTextTitle: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#212529",
    lineHeight: 21,
  },
  mainContainerTableContainerTextDescription: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#212529",
    lineHeight: 21,
  },
  mainContainerTableContainerTextSupport: {
    fontFamily: "Lexend_400Regular",
    fontSize: 12,
    color: "#6C757D",
    lineHeight: 18,
  },
});
