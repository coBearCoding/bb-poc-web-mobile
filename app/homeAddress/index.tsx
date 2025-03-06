import { View, Text, StyleSheet } from "react-native";
import BBBottomSheet from "@/components/ui/mobile/shared/Bottomsheet.component";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import BBHeader from "@/components/ui/shared/Header.component";
import BBInputText from "@/components/ui/shared/Input.component";
import BBStepper from "@/components/ui/shared/Stepper.component";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import {
  LucideArrowLeft,
  LucideLocate,
  LucideLogOut,
  LucideSearch,
} from "lucide-react-native";
import { useMemo, useRef, useState } from "react";
import BBButton from "@/components/ui/shared/Button.component";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function HomeAddressPage() {
  const router = useRouter();

  // * ---- Bottomsheet Props ----
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(1);
  const bottomSheetSnapPoints = useMemo(() => ["90%"], []);
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetOpened(true);
    bottomSheetRef.current?.present();
  };

  const closedBottomSheet = () => {
    setIsBottomSheetOpened(false);
    bottomSheetRef.current?.dismiss();
  };

  // * ---- GoogleMaps Props ----
  const [showGoogleMaps, setShowGoogleMaps] = useState(false);

  return (
    <>
      <BottomSheetModalProvider>
        <BBHeader
          leadButtonIcon={() => (
            <LucideArrowLeft color={"#212529"} onPress={() => router.back()} />
          )}
          trailingButtonIcon={() => (
            <LucideLogOut
              color={"#212529"}
              onPress={() => router.replace("/")}
            />
          )}
        />
        <BBStepper totalSteps={6} currentStep={2} />
        <ContentContainer title="Ingresa los datos de tu domicilio">
          <BBInputText
            labelText="Ubica tu domicilio"
            textContentType="none"
            placeholder="Marca la ubicación en el mapa"
            editable={false}
            rightIcon={() => <LucideLocate size={16} color={"#212529"} />}
            onPressIn={() => {
              openBottomSheet();
            }}
          />

          <BBButton children="Continuar" onPress={() => router.push("/otp")} />
        </ContentContainer>
        <BBBottomSheet
          ref={bottomSheetRef}
          index={bottomSheetIndex}
          snapPoints={bottomSheetSnapPoints}
          onClose={closedBottomSheet}
          enablePanDownToClose={false}
          enableDynamicSizing
          isOpened={isBottomSheetOpened}
          closeButton
          headerTitle="Ubica tu dirección"
        >
          <View style={{ height: "75%", width: "100%", paddingBottom: 12 }}>
            <MapView
              // provider={PROVIDER_GOOGLE}
              style={{ height: "100%", width: "100%" }}
            >
              <Marker
                coordinate={{ latitude: -0.208946, longitude: -78.507751 }}
              />
            </MapView>
          </View>
          <View style={styles.mainBottomSheetButtonsContent}>
            <BBButton
              icon={() => <LucideSearch size={20} color={"#fff"} />}
              children={"Buscar dirección"}
              onPress={() => {
                setBottomSheetIndex(2);
                setShowGoogleMaps(true);
              }}
            />
            <BBButton
              icon={() => <LucideLocate size={20} color={"#008392"} />}
              variant="secondary"
              children={"Usar mi ubicación actual"}
              onPress={() => {
                setBottomSheetIndex(2);
                setShowGoogleMaps(true);
              }}
            />
          </View>
        </BBBottomSheet>
      </BottomSheetModalProvider>
    </>
  );
}

const styles = StyleSheet.create({
  mainBottomSheetButtonsContent: {
    flexDirection: "column",
    gap: 16,
  },
});
