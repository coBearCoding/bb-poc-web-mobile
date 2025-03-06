import { PropsWithChildren, ReactNode } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "react-native-paper";

export interface ContentContainerProps extends PropsWithChildren {
  title?: string;
  stepper?: ReactNode | JSX.Element;
  buttons?: ReactNode | JSX.Element;
  bodyStyles?: ViewStyle;
  mainContainerStyles?: ViewStyle;
}

const mobileContentContainer = ({ children, title }: ContentContainerProps) => {
  return (
    <ScrollView style={[mobileStyles.mainContainer]}>
      {title && <Text style={mobileStyles.mainContainerTitle}>{title}</Text>}
      <View style={mobileStyles.mainContainerContent}>{children}</View>
    </ScrollView>
  );
};

const webContentContainer = ({
  children,
  title,
  stepper,
  buttons,
  bodyStyles,
  mainContainerStyles,
}: ContentContainerProps) => {
  return (
    <View style={[webStyles.bodyContainer, bodyStyles]}>
      <View style={[webStyles.mainContainer, mainContainerStyles]}>
        {stepper}
        <ScrollView>{children}</ScrollView>
      </View>
    </View>
  );
};

export default function InternalContentContainer(props: ContentContainerProps) {
  const isWeb = Platform.OS === "web";
  return !isWeb ? mobileContentContainer(props) : webContentContainer(props);
}

const mobileStyles = StyleSheet.create({
  mainContainer: {
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 24,
    paddingLeft: 16,
    gap: 24,
    backgroundColor: "white",
    flexDirection: "column",
    flex: 1,
    flexShrink: 0,
  },
  mainContainerTitle: {
    fontFamily: "Lexend_600SemiBold",
    fontSize: 28,
    color: "#212529",
    lineHeight: 40,
  },

  mainContainerContent: {
    gap: 24,
  },
});
const webStyles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: "#EDEEF3",
    flex: 1,
    marginLeft: 105,
  },
  mainContainer: {
    padding: 24,
    gap: 24,
  },
});
