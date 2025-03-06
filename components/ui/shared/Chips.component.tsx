import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Text } from "react-native-paper";

export interface BBChipProps extends TouchableOpacityProps {
  selected?: boolean;
  value: string;
}

export default function BBChip({ selected, value, onPress }: BBChipProps) {
  return (
    <>
      <TouchableOpacity
        style={styles(selected).mainContainer}
        onPress={onPress}
      >
        <Text style={styles(selected).mainContainerText}>{value}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = (selected: boolean | undefined) =>
  StyleSheet.create({
    mainContainer: {
      borderWidth: 1,
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 16,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      borderColor: !selected ? "#CED4DA" : "#8CCFC7",
      backgroundColor: !selected ? "#fff" : "#DAEFED",
      cursor: "pointer",
    },
    mainContainerText: {
      fontFamily: "Lexend_400Regular",
      fontSize: 16,
      color: "#212529",
      lineHeight: 24,
    },
  });
