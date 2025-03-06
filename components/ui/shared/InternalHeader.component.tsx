import { memo } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { Appbar } from "react-native-paper";
import { Image } from "expo-image";

const BB_LOGO_IMG = "../../../assets/images/svg/logo_header_internal.svg";

interface BBHeaderProps {
  variant?: "primary" | "secondary";
  titleChildren?: React.JSX.Element;
  leadButtonIcon?: LucideIcon;
  trailingButtonIcon?: LucideIcon;
  iconSize?: number;
}

const BBHeaderWeb = memo(
  ({
    leadButtonIcon,
    trailingButtonIcon,
    iconSize,
    titleChildren,
  }: BBHeaderProps) => {
    return (
      <Appbar.Header style={webStyles.headerMainContainer} mode="small">
        {leadButtonIcon ? (
          <Appbar.Action
            size={iconSize}
            icon={leadButtonIcon}
            onPress={() => {}}
          />
        ) : undefined}

        <View style={webStyles.headerLogoMainContainer}>
          <Image style={webStyles.headerLogo} source={require(BB_LOGO_IMG)} />
        </View>
        <View style={webStyles.headerTitleContainer}> {titleChildren}</View>

        {trailingButtonIcon ? (
          <Appbar.Action
            size={iconSize}
            icon={trailingButtonIcon}
            onPress={() => {}}
          />
        ) : undefined}
      </Appbar.Header>
    );
  }
);

const BBInternalHeaderMobile = memo(
  ({
    leadButtonIcon,
    trailingButtonIcon,
    iconSize,
    titleChildren,
  }: BBHeaderProps) => {
    return (
      <Appbar.Header
        style={mobileStyles.headerMainContainer}
        mode="center-aligned"
      >
        {leadButtonIcon ? (
          <Appbar.Action icon={leadButtonIcon} onPress={() => {}} />
        ) : undefined}

        <View style={mobileStyles.headerLogoMainContainer}>
          <Image
            style={mobileStyles.headerLogo}
            source={require(BB_LOGO_IMG)}
          />
        </View>
        <View style={mobileStyles.headerTitleChildrenContainer}>
          {titleChildren}
        </View>
        {trailingButtonIcon ? (
          <Appbar.Action
            size={iconSize}
            icon={trailingButtonIcon}
            onPress={() => {}}
          />
        ) : undefined}
      </Appbar.Header>
    );
  }
);

export default function BBInternalHeader(props: BBHeaderProps) {
  const isWeb = Platform.OS === "web";
  if (isWeb) {
    return <BBHeaderWeb {...props} />;
  } else {
    return <BBInternalHeaderMobile {...props} />;
  }
}

const mobileStyles = StyleSheet.create({
  headerMainContainer: {
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row", // Align items horizontally
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#CED4DA",
  },
  headerLogoMainContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  headerTitleChildrenContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerLogo: {
    width: 32,
    height: 32,
  },
});
const webStyles = StyleSheet.create({
  headerMainContainer: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#DEE3E3",
    flex: 1,
  },
  headerTitleContainer: {
    flex: 1,

    alignItems: "flex-start",
  },
  headerLogoMainContainer: {
    display: "flex",
    height: 64,
    paddingVertical: 16,
    paddingLeft: 24,
    gap: 10,
    flexShrink: 0,
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  headerLogo: {
    width: 32,
    height: 32,
  },
});
