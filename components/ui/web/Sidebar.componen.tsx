import { usePathname, useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import BBButton from "../shared/Button.component";
import {
  LucideArrowLeftRight,
  LucideCirclePlus,
  LucideHome,
  LucideReceipt,
  LucideUser2,
} from "lucide-react-native";

export default function BBSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.sidebarOptionContainer}>
        <View style={iconStyles(pathname === "/").mainIconContainer}>
          <LucideHome
            color={pathname === "/" ? "#008392" : "black"}
            onPress={() => router.push("/(tabs)")}
          />
        </View>
        <View>
          <Text style={iconStyles(pathname === "/").mainTextContainer}>
            Inicio
          </Text>
        </View>
      </View>
      <View style={styles.sidebarOptionContainer}>
        <View style={iconStyles(pathname === "/(tabs)").mainIconContainer}>
          <LucideReceipt onPress={() => router.push("/(tabs)")} />
        </View>
        <View>
          <Text style={iconStyles(pathname === "/(tabs)").mainTextContainer}>
            Pagar
          </Text>
        </View>
      </View>
      <View style={styles.sidebarOptionContainer}>
        <View style={iconStyles(pathname === "/request").mainIconContainer}>
          <LucideCirclePlus onPress={() => router.push("/(tabs)/request")} />
        </View>
        <View>
          <Text style={iconStyles(pathname === "/request").mainTextContainer}>
            Solicitar
          </Text>
        </View>
      </View>
      <View style={styles.sidebarOptionContainer}>
        <View
          style={iconStyles(pathname === "/(tabs)/profile").mainIconContainer}
        >
          <LucideUser2 onPress={() => router.push("/(tabs)/profile")} />
        </View>
        <View>
          <Text
            style={iconStyles(pathname === "/(tabs)/profile").mainTextContainer}
          >
            Perfil
          </Text>
        </View>
      </View>
    </View>
  );
}

const iconStyles = (focused: boolean) =>
  StyleSheet.create({
    mainIconContainer: {
      backgroundColor: focused ? "#DAEFED" : "transparent",
      color: focused ? "#008392" : "#212529",
      paddingVertical: 4,
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 16,
    },
    mainTextContainer: {
      color: focused ? "#008392" : "#212529",
      fontFamily: focused ? "Lexend_700Bold" : "Lexend_400Regular",
      fontSize: 12,
      lineHeight: 18,
    },
  });

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute", // TODO: TEMPORAL
    marginTop: 66, // TODO: TEMPORAL
    zIndex: 100,
    width: 105,
    padding: 12,
    borderRightWidth: 1,
    borderRightColor: "#DEE3E3",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    gap: 24,
    height: "100%",
  },
  sidebarOptionContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },

  //   sidebar: {
  //     width: 250,
  //     backgroundColor: "#f4f4f4",
  //     padding: 20,
  //     height: "100%",
  //   },
  //   sidebarTitle: {
  //     fontSize: 20,
  //     fontWeight: "bold",
  //     marginBottom: 20,
  //   },
});
