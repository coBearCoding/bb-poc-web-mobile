import ContentContainer from "@/components/ui/shared/ContentContainer";
import BBHeader from "@/components/ui/shared/Header.component";
import { useRouter } from "expo-router";
import { LucideArrowLeft, LucideX } from "lucide-react-native";
import BBNumberInput from "@/components/ui/shared/NumberInput.component";
import BBInputText from "@/components/ui/shared/Input.component";
import BBFooter from "@/components/ui/shared/Footer.component";
import BBButton from "@/components/ui/shared/Button.component";
import AccountsPage from "@/components/pages/mobile/transfer/index/accounts.mobile.page";

export default function TabsIndex() {
  const router = useRouter();
  return (
    <>
      <BBHeader
        headerTitle="Monto"
        showLogo={false}
        showDivider
        leadButtonIcon={() => (
          <LucideArrowLeft color={"#212529"} onPress={() => router.back()} />
        )}
        trailingButtonIcon={() => <LucideX color={"#212529"} />}
      />
      <ContentContainer>
        <AccountsPage />

        <BBNumberInput label="Ingresa tu monto" />

        <BBInputText
          labelText="Motivo (opcional)"
          trailingText="¿Es un regalo?"
        />
      </ContentContainer>
      <BBFooter>
        <BBButton
          children="Continuar"
          onPress={() => router.push("/transfer/confirm")}
        />
      </BBFooter>
    </>
  );
}
