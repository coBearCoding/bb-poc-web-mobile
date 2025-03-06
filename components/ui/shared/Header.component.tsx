import { memo } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { Appbar } from "react-native-paper";
import { Image } from "expo-image";
import { Text } from "react-native-paper";

const BB_LOGO_IMG = "@assets/images/svg/logo_bolivariano.svg";

interface BBHeaderProps {
  variant?: "primary" | "secondary";
  leadButtonIcon?: LucideIcon;
  trailingButtonIcon?: LucideIcon;
  iconSize?: number;
  showLogo?: boolean;
  headerTitle?: string;
  showDivider?: boolean;
}

const BBHeaderWeb = memo(
  ({ leadButtonIcon, trailingButtonIcon, iconSize }: BBHeaderProps) => {
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

const BBHeaderMobile = memo(
  ({
    leadButtonIcon,
    trailingButtonIcon,
    iconSize,
    showLogo = true,
    headerTitle = "",
    showDivider = false,
  }: BBHeaderProps) => {
    return (
      <Appbar.Header
        style={[
          mobileStyles.headerMainContainer,
          showDivider && { borderBottomWidth: 1, borderColor: "#CED4DA" },
        ]}
        mode="center-aligned"
      >
        {leadButtonIcon ? (
          <Appbar.Action icon={leadButtonIcon} onPress={() => {}} />
        ) : undefined}

        {showLogo && (
          <View style={mobileStyles.headerLogoMainContainer}>
            <Image
              style={mobileStyles.headerLogo}
              source={require(BB_LOGO_IMG)}
            />
          </View>
        )}
        {headerTitle !== "" && (
          <View style={mobileStyles.headerTextTitleMainContainer}>
            <Text style={mobileStyles.headerTextTitle}>{headerTitle}</Text>
          </View>
        )}

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

export default function BBHeader(props: BBHeaderProps) {
  const isWeb = Platform.OS === "web";
  if (isWeb) {
    return <BBHeaderWeb {...props} />;
  } else {
    return <BBHeaderMobile {...props} />;
  }
}

const mobileStyles = StyleSheet.create({
  headerMainContainer: {
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  headerLogoMainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextTitleMainContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  headerTextTitle: {
    fontFamily: "Lexend_500Medium",
    fontSize: 16,
    color: "#212529",
    lineHeight: 24,
  },
  headerLogo: {
    width: 175,
    height: 27,
  },
});
const webStyles = StyleSheet.create({
  headerMainContainer: {
    backgroundColor: "white",
    marginRight: 128,
  },
  headerLogoMainContainer: {
    display: "flex",
    height: 64,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 128,
    paddingLeft: 128,
    gap: 10,
    flexShrink: 0,
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
  },
  headerLogo: {
    width: 175,
    height: 27,
  },
});
