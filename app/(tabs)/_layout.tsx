import { Tabs } from "expo-router";
import {
  LucideArrowLeftRight,
  LucideHome,
  LucidePlusCircle,
  LucideReceipt,
  LucideUser2,
} from "lucide-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#008392",
        tabBarInactiveTintColor: "#494A52",
        tabBarItemStyle: { marginTop: 12 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#DAEFED" : "transparent",
                paddingVertical: 4,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
              }}
            >
              <LucideHome color={color} />
            </View>
          ),

          tabBarLabel: "Inicio",
        }}
      />

      <Tabs.Screen
        name="payment"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#DAEFED" : "transparent",
                paddingVertical: 4,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
              }}
            >
              <LucideReceipt color={color} />
            </View>
          ),

          tabBarLabel: "Pagar",
        }}
      />

      <Tabs.Screen
        name="request/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#DAEFED" : "transparent",
                paddingVertical: 4,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
              }}
            >
              <LucidePlusCircle color={color} />
            </View>
          ),

          tabBarLabel: "Solicitar",
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#DAEFED" : "transparent",
                paddingVertical: 4,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
              }}
            >
              <LucideUser2 color={color} />
            </View>
          ),

          tabBarLabel: "Perfil",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontFamily: "Lexend_500Medium",
    fontSize: 16,
    color: "#212529",
    lineHeight: 40,
    paddingBottom: 24,
  },
  indexHeaderRightContainer: {
    padding: 12,
  },
});
