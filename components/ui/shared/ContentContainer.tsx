import { PropsWithChildren, ReactNode } from "react";
import {
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface ContentContainerProps extends ScrollViewProps {
  title?: string;
  stepper?: ReactNode | JSX.Element;
  buttons?: ReactNode | JSX.Element;
}

const mobileContentContainer = ({
  children,
  title,
  style,
}: ContentContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={[mobileStyles.mainContainer, style]}>
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
}: ContentContainerProps) => {
  return (
    <View style={webStyles.bodyContainer}>
      <View style={webStyles.mainContainer}>
        {stepper}
        {title && <Text style={webStyles.mainContainerTitle}>{title}</Text>}
        <ScrollView style={webStyles.mainContainerContent}>
          {children}
        </ScrollView>

        <View style={webStyles.footerContainer}>{buttons}</View>
      </View>
    </View>
  );
};

export default function ContentContainer(props: ContentContainerProps) {
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
  },
  mainContainer: {
    marginTop: 44,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "column",
    alignItems: "flex-start",
    flexShrink: 0,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 32,
    width: 604,
    justifyContent: "center",
  },
  mainContainerTitle: {
    fontFamily: "Lexend_600SemiBold",
    fontSize: 28,
    color: "#212529",
    lineHeight: 40,
    paddingBottom: 24,
  },

  mainContainerContent: {
    alignSelf: "stretch",
    gap: 24,
    maxHeight: 340,
    marginBottom: 32,
  },

  footerContainer: {
    marginTop: 32,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 24,
    width: "100%",
    maxWidth: 540,
  },
});
