import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Button, ButtonProps } from "react-native-paper";

interface BBButtonProps extends ButtonProps {
  variant?: "primary" | "secondary";
}

export default function BBButton({
  children,
  onPress,
  icon,
  disabled,
  variant = "primary",
}: BBButtonProps) {
  return (
    <>
      <Button
        icon={icon}
        mode="contained"
        onPress={onPress}
        disabled={disabled}
        style={styles(variant, disabled).mainButtonContainer}
        labelStyle={styles(variant, disabled).mainButtonContainerText}
        contentStyle={styles(variant, disabled).mainButton}
      >
        {children}
      </Button>
    </>
  );
}

// * ---- COMPONENTS STYLES ---- *

type ButtonVariant = "primary" | "secondary";

interface VariantStyles {
  containerBorderWidth: number;
  containerBackgroundColor: string;
  containerBorderColor: string;
  textColor: string;
  disabledBackgroundColor: string;
  disabledTextColor: string;
  disabledBorderWidth: number;
}

interface ButtonStyles {
  mainButtonContainer: ViewStyle;
  mainButton: ViewStyle;
  mainButtonContainerText: TextStyle;
}

const baseStyles = StyleSheet.create({
  mainButtonContainer: {
    borderWidth: 0,
    backgroundColor: "#008392",
    borderRadius: 36,
    width: "100%", // Changed from "auto" to "100%" for full-width buttons
  },

  mainButton: {
    paddingVertical: 6,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  mainButtonContainerText: {
    fontFamily: "Lexend_500Medium",
    fontSize: 16,
    color: "#fff",
    fontStyle: "normal",
    padding: 0,
  },
});

const variantStyles: Record<ButtonVariant, VariantStyles> = {
  primary: {
    containerBorderWidth: 1,
    containerBackgroundColor: "#008392",
    containerBorderColor: "#005f6b",
    textColor: "#ffffff",
    disabledBackgroundColor: "#F3F3F3",
    disabledTextColor: "#A6A6A6",
    disabledBorderWidth: 0,
  },
  secondary: {
    containerBorderWidth: 1,
    containerBackgroundColor: "white",
    containerBorderColor: "#008392",
    textColor: "#008392",
    disabledBackgroundColor: "#F3F3F3",
    disabledTextColor: "#A6A6A6",
    disabledBorderWidth: 0,
  },
};

const styles = (variant: ButtonVariant, isDisabled?: boolean): ButtonStyles => {
  const stylesByVariant = variantStyles[variant];

  return {
    mainButtonContainer: {
      ...baseStyles.mainButtonContainer,
      backgroundColor: isDisabled
        ? stylesByVariant.disabledBackgroundColor
        : stylesByVariant.containerBackgroundColor,
      borderColor: stylesByVariant.containerBorderColor,
      borderWidth: isDisabled
        ? stylesByVariant.disabledBorderWidth
        : stylesByVariant.containerBorderWidth,
    },
    mainButton: {
      ...baseStyles.mainButton,
    },
    mainButtonContainerText: {
      ...baseStyles.mainButtonContainerText,
      color: isDisabled
        ? stylesByVariant.disabledTextColor
        : stylesByVariant.textColor,
    },
  };
};
