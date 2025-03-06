import BBButton from "@/components/ui/shared/Button.component";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import BBHeader from "@/components/ui/shared/Header.component";
import BBInputText from "@/components/ui/shared/Input.component";
import BBStepper from "@/components/ui/shared/Stepper.component";
import {
  getLocationFromUser,
  JumpedPin,
  LandPin,
  useGeolocationPermissions,
} from "@/components/ui/web/GoogleMaps/GoogleMaps.component";
import BBModal from "@/components/ui/web/Modal.component";
import { useRouter } from "expo-router";
import { LucideLocate, LucideLogOut, LucideSearch } from "lucide-react-native";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapEvent,
} from "@vis.gl/react-google-maps";

export default function HomeAddressWebPage() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  /* GOOGLE MAPS - PROPS */
  const [isMapVisible, setIsMapVisible] = useState(false);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );
  const [center, setCenter] = useState<google.maps.LatLngLiteral | null>({
    lat: -0.208946,
    lng: -78.507751,
  });

  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLngLiteral | null>({
      lat: -0.208946,
      lng: -78.507751,
    });
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  const permissions = useGeolocationPermissions();

  const handleCurrentLocation = async () => {
    const { latitude, longitude } = await getLocationFromUser();
  };
  const handleMapDragStart = (e: MapEvent) => {
    setIsBeingDragged(true);
  };

  const handleDrag = (e: MapEvent) => {
    const getCenter = e.map.getCenter();

    setMarkerPosition({
      lat: getCenter?.lat()!,
      lng: getCenter?.lng()!,
    });

    setCenter({ lat: markerPosition!.lat, lng: markerPosition!.lng });
  };

  const handleDragEnd = (e: MapEvent) => {
    setIsBeingDragged(false);

    // const getCenter = e.map.getCenter();
  };

  return (
    <>
      <BBHeader
        trailingButtonIcon={() => (
          <LucideLogOut color={"#212529"} onPress={() => router.replace("/")} />
        )}
      />
      <ContentContainer
        stepper={<BBStepper totalSteps={6} currentStep={2} />}
        title="Ingresa los datos de tu domicilio"
        buttons={
          <>
            <View>
              <BBButton
                children="Continuar"
                onPress={() => router.push("/otp")}
              />
            </View>
            <View>
              <BBButton
                variant="secondary"
                children="Atrás"
                onPress={() => {
                  router.back();
                }}
              />
            </View>
          </>
        }
      >
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <BBInputText
            labelText="Ubica tu domicilio"
            placeholder="Marca la ubicación en el mapa"
            editable={false}
            rightIcon={() => <LucideLocate size={16} color={"#212529"} />}
          />
        </Pressable>
        <BBModal
          headerTitle="Ubica tu dirección"
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          closeButton
        >
          <View style={styles.mainModalContainerContent}>
            <View style={{ display: !isMapVisible ? "flex" : "none" }}>
              <BBButton
                variant="primary"
                icon={() => <LucideSearch size={20} color={"#fff"} />}
                children="Buscar dirección"
                onPress={() => setIsMapVisible(true)}
              />
            </View>
            <View style={{ display: !isMapVisible ? "flex" : "none" }}>
              <BBButton
                icon={() => <LucideLocate size={20} color={"#008392"} />}
                variant="secondary"
                children={"Usar mi ubicación actual"}
              />
            </View>
          </View>
          <View style={{ height: "75%", width: "100%" }}>
            <APIProvider apiKey={"AIzaSyAUH-QQgZLLuEwQAE1v9oF8oWwXCj5rPQA"}>
              <Map
                style={{ height: isMapVisible ? 296 : 0, width: 504 }}
                zoom={7}
                center={center}
                onDragstart={handleMapDragStart}
                onDrag={handleDrag}
                onDragend={handleDragEnd}
                mapId={"d397752b9ccc2ea5"}
                gestureHandling="greedy"
                disableDefaultUI={false}
                mapTypeControl={false}
                zoomControl={true}
                fullscreenControl={false}
                streetViewControl={false}
              >
                <AdvancedMarker ref={markerRef} position={markerPosition}>
                  {JumpedPin(isBeingDragged)}
                  {LandPin(isBeingDragged)}
                </AdvancedMarker>
              </Map>
            </APIProvider>
          </View>
          <View
            style={{
              display: isMapVisible ? "flex" : "none",
              flexDirection: "row-reverse",
              marginTop: 12,
              gap: 4,
            }}
          >
            <View>
              <BBButton
                variant="primary"
                // icon={() => <LucideSearch size={20} color={"#fff"} />}
                children="Confirmar mi dirección"
                onPress={() => setIsMapVisible(true)}
              />
            </View>
            <View>
              <BBButton
                icon={() => <LucideLocate size={20} color={"#008392"} />}
                variant="secondary"
                onPress={handleCurrentLocation}
                children={"Usar mi ubicación actual"}
              />
            </View>
          </View>
        </BBModal>
      </ContentContainer>
    </>
  );
}

const styles = StyleSheet.create({
  mainModalContainerContent: {
    flexDirection: "row-reverse",
    width: "auto",
    gap: 24,
    overflow: "scroll",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    width: "100%",
    paddingHorizontal: 16,
  },
});
