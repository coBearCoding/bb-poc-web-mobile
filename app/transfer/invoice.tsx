import InvoiceDetailPage from "@/components/pages/mobile/transfer/invoice/invoiceDetail.mobile.page";
import BBButton from "@/components/ui/shared/Button.component";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import BBFooter from "@/components/ui/shared/Footer.component";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function InvoicePage() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ marginTop: insets.top, flex: 1 }}>
      <ContentContainer style={{ backgroundColor: "#EDEEF3" }}>
        <InvoiceDetailPage />
      </ContentContainer>
      <BBFooter style={{ gap: 16 }}>
        <BBButton children="Compartir comprobante" />
        <BBButton children="Ir al inicio" variant="secondary" />
      </BBFooter>
    </View>
  );
}
