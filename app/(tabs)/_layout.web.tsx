import BBSidebar from "@/components/ui/web/Sidebar.componen";
import { Slot } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function WebLayout() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {/* <BBSidebar /> */}
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </View>
  );
}
