import { StyleSheet } from "react-native";
import { Button, ButtonProps } from "react-native-paper";

interface BBButtonProps extends ButtonProps {
  hasUnderScore?: boolean;
}

export default function BBLinkButton({
  children,
  onPress,
  icon,
  hasUnderScore,
}: BBButtonProps) {
  return (
    <>
      <Button
        icon={icon}
        mode="text"
        onPress={onPress}
        style={styles(hasUnderScore).mainButtonContainer}
        labelStyle={styles(hasUnderScore).mainButtonContainerText}
      >
        {children}
      </Button>
    </>
  );
}

const styles = (hasUnderScore?: boolean) =>
  StyleSheet.create({
    mainButtonContainer: {
      backgroundColor: "transparent",
      paddingTop: 6,
      paddingBottom: 6,
      paddingRight: 32,
      paddingLeft: 32,
      borderRadius: 36,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },

    mainButtonContainerText: {
      fontFamily: "Lexend_500Medium",
      fontSize: 16,
      color: "#008392",
      fontStyle: "normal",
      padding: 0,
      textDecorationLine: hasUnderScore ? "underline" : "none",
    },
  });
