import { View, StyleSheet, ViewProps } from "react-native";

interface BBCard extends ViewProps {
  variant?: "primary" | "secondary";
}

export default function BBCard({
  children,
  style,
  variant = "primary",
}: BBCard) {
  return <View style={[styles(variant).mainContainer, style]}>{children}</View>;
}

// * ---- COMPONENT STYLES ---- *

type CardVariant = "primary" | "secondary";

interface VariantStyles {
  containerBackgroundColor: string;
  containerBorderColor: string;
  borderWidth: number;
}

const BaseStyles = StyleSheet.create({
  mainContainer: {
    paddingTop: 16,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 16,
    flexDirection: "column",
    overflow: "hidden",
  },
});

const variantStyles: Record<CardVariant, VariantStyles> = {
  primary: {
    containerBackgroundColor: "#F2F9FA",
    containerBorderColor: "none",
    borderWidth: 0,
  },
  secondary: {
    containerBackgroundColor: "#FFF",
    containerBorderColor: "#CED4DA",
    borderWidth: 1,
  },
};

const styles = (variant: CardVariant) => {
  const stylesByVariant = variantStyles[variant];

  return {
    mainContainer: {
      ...BaseStyles.mainContainer,
      backgroundColor: stylesByVariant.containerBackgroundColor,
      borderColor: stylesByVariant.containerBorderColor,
      borderWidth: stylesByVariant.borderWidth,
    },
  };
};
