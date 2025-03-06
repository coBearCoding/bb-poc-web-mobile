import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import BBHeader from "@/components/ui/shared/Header.component";
import { LucideArrowLeft, LucideX } from "lucide-react-native";
import AccountsPage from "@/components/pages/mobile/transfer/index/accounts.mobile.page";
import TransferDetailsPage from "@/components/pages/mobile/transfer/confirm/transferDetails.mobile.page";
import BBAlert from "@/components/ui/shared/Alert.component";
import BBFooter from "@/components/ui/shared/Footer.component";
import BBButton from "@/components/ui/shared/Button.component";

export default function ConfirmTransferPage() {
  const router = useRouter();
  return (
    <>
      <BBHeader
        headerTitle="Confirmación"
        showLogo={false}
        showDivider
        leadButtonIcon={() => (
          <LucideArrowLeft color={"#212529"} onPress={() => router.back()} />
        )}
        trailingButtonIcon={() => <LucideX color={"#212529"} />}
      />
      <ContentContainer>
        <View style={styles.mainContainerTitle}>
          <Text style={styles.mainContainerTextTitle}>
            Confirma la transferecia
          </Text>
        </View>

        <AccountsPage />

        <TransferDetailsPage />

        <BBAlert descriptionText="La transferencia se realizará de inmediato" />
      </ContentContainer>
      <BBFooter>
        <BBButton
          children="Transferir"
          onPress={() => router.push("/transfer/invoice")}
        />
      </BBFooter>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainerTitle: {
    gap: 8,
  },
  mainContainerTextTitle: {
    alignItems: "stretch",
    fontFamily: "Lexend_600SemiBold",
    fontSize: 28,
    color: "#212529",
    lineHeight: 40,
  },
});
