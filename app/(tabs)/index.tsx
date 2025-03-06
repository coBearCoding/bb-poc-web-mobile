import BBInternalHeader from "@/components/ui/shared/InternalHeader.component";
import { useRouter } from "expo-router";
import {
  LucideBell,
  LucideCreditCard,
  LucideEye,
  LucideHome,
  LucideShare2,
  LucideUserSquare2,
  LucideWifi,
} from "lucide-react-native";
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { Image } from "expo-image";
import BBBanner from "@/components/ui/shared/Banner.component";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import { useRef } from "react";
import BBCarousel from "@/components/ui/shared/Carousel.component";
import BBCard from "@/components/ui/shared/Card.component";
import BBAvatar from "@/components/ui/shared/Avatar.component";

const CoupleImage = require("@assets/images/webpg/couple.webp");

const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

export default function TabsIndex() {
  const router = useRouter();

  const carouselRef = useRef(null);

  return (
    <>
      <BBInternalHeader
        titleChildren={
          <View style={styles.mainTitleHeaderContainer}>
            <Text style={styles.mainTitleHeaderText}>Hola, </Text>
            <Text style={styles.mainTitleHeaderTextGreen}>Fernando</Text>
          </View>
        }
        trailingButtonIcon={() => (
          <LucideBell color={"#212529"} onPress={() => router.replace("/")} />
        )}
      />
      <ContentContainer>
        <BBCarousel
          ref={carouselRef}
          data={data}
          style={styles.mainBBCarouselContentContainer}
          renderItem={({ item }) => (
            <BBBanner>
              <View style={styles.mainBBBannerContent}>
                <View id="Texts" style={styles.mainBBBannerTextContainer}>
                  <Text style={styles.mainBBBannerTextTitle}>
                    Gana hasta un 8% de interés
                  </Text>
                  <Text style={styles.mainBBBannerTextDescription}>
                    ¡Haz crecer tu dinero!
                  </Text>
                  <Text style={styles.mainBBBannerTextDescription}>
                    Simula y crea tu inversión
                  </Text>
                </View>
                <View id="Image">
                  <Image
                    style={styles.mainBBCardImage}
                    source={CoupleImage}
                    contentFit="cover"
                  />
                </View>
              </View>
            </BBBanner>
          )}
        />
        <Text style={styles.mainSectionTextTitle}>Mis productos</Text>
        <ScrollView horizontal contentContainerStyle={{ gap: 12 }}>
          <BBCard variant="secondary">
            <View style={styles.mainProductCardMainContainer}>
              <View style={styles.mainProductCardMainContentContainer}>
                <View>
                  <Text
                    style={styles.mainProductCardMainContentContainerTextTitle}
                  >
                    Cuenta de ahorro
                  </Text>
                  <Text
                    style={
                      styles.mainProductCardMainContentContainerTextDescription
                    }
                  >
                    00012345678
                  </Text>
                </View>

                <View style={{ gap: 4 }}>
                  <Text
                    style={
                      styles.mainProductCardMainContentContainerMoneyTextDescription
                    }
                  >
                    Saldo disponible
                  </Text>
                  <Text
                    style={
                      styles.mainProductCardMainContentContainerMoneyTextTitle
                    }
                  >
                    $1290.98
                  </Text>
                </View>
              </View>
              <View style={styles.mainProductCardMainContentContainer}>
                <LucideShare2 color={"#008392"} />
                <LucideEye color={"#008392"} />
              </View>
            </View>
          </BBCard>

          <BBCard>
            <View style={styles.mainProductCardMainContainer}>
              <View style={styles.mainProductCardMainContentContainer}>
                <View>
                  <Text
                    style={styles.mainProductCardMainContentContainerTextTitle}
                  >
                    Bankard Visa
                  </Text>
                  <Text
                    style={
                      styles.mainProductCardMainContentContainerTextDescription
                    }
                  >
                    4551 **** **** 3012
                  </Text>
                </View>

                <View style={{ gap: 4 }}>
                  <Text
                    style={[
                      styles.mainProductCardMainContentContainerMoneyTextDescription,
                      { color: "#3B82F6" },
                    ]}
                  >
                    Pagar hasta el 15 nov. 2024
                  </Text>
                  <Text
                    style={
                      styles.mainProductCardMainContentContainerMoneyTextTitle
                    }
                  >
                    $102.97
                  </Text>
                </View>
              </View>
              <View style={styles.mainProductCardMainContentContainer}>
                <LucideShare2 color={"#008392"} />
                <LucideEye color={"#008392"} />
              </View>
            </View>
          </BBCard>

          <BBCard>
            <View style={styles.mainProductCardMainContainer}>
              <View style={styles.mainProductCardMainContentContainer}>
                <View>
                  <Text
                    style={styles.mainProductCardMainContentContainerTextTitle}
                  >
                    Credimax Online
                  </Text>
                  <Text
                    style={
                      styles.mainProductCardMainContentContainerTextDescription
                    }
                  >
                    0000505571
                  </Text>
                </View>

                <View style={{ gap: 4 }}>
                  <Text
                    style={[
                      styles.mainProductCardMainContentContainerMoneyTextDescription,
                      { color: "#3B82F6" },
                    ]}
                  >
                    Pagar hasta el 18 dic. 2024
                  </Text>
                  <Text
                    style={
                      styles.mainProductCardMainContentContainerMoneyTextTitle
                    }
                  >
                    $129.00
                  </Text>
                </View>
              </View>
              <View style={styles.mainProductCardMainContentContainer}>
                <LucideShare2 color={"#008392"} />
                <LucideEye color={"#008392"} />
              </View>
            </View>
          </BBCard>
          <BBCard>
            <View style={styles.mainProductCardMainContainer}>
              <View style={styles.mainProductCardMainContentContainer}>
                <View>
                  <Text
                    style={styles.mainProductCardMainContentContainerTextTitle}
                  >
                    Depósito a plazo fijo
                  </Text>
                  <Text
                    style={
                      styles.mainProductCardMainContentContainerTextDescription
                    }
                  >
                    CDP49856265
                  </Text>
                </View>

                <View style={{ gap: 4 }}>
                  <Text
                    style={[
                      styles.mainProductCardMainContentContainerMoneyTextDescription,
                      { color: "#3B82F6" },
                    ]}
                  >
                    Vence el 07 ene. 2025
                  </Text>
                  <Text
                    style={
                      styles.mainProductCardMainContentContainerMoneyTextTitle
                    }
                  >
                    $11.529.00
                  </Text>
                </View>
              </View>
              <View style={styles.mainProductCardMainContentContainer}>
                <LucideShare2 color={"#008392"} />
                <LucideEye color={"#008392"} />
              </View>
            </View>
          </BBCard>
        </ScrollView>

        <View style={styles.mainFastActionContainer}>
          <Text style={styles.mainSectionTextTitle}>Acciones rápidas</Text>
          <Text style={styles.mainFastActionButtonText}>Agregar</Text>
        </View>
        <ScrollView horizontal contentContainerStyle={{ gap: 12 }}>
          <TouchableOpacity onPress={() => router.push("/transfer")}>
            <BBCard variant="secondary" style={{ width: 128 }}>
              <View
                id="mainContainer"
                style={styles.mainFastActionCardContainer}
              >
                <View
                  style={
                    styles.mainFastActionCardContainerAvatarDescriptionContainer
                  }
                >
                  <BBAvatar>
                    <LucideUserSquare2 size={20} color={"#6B314F"} />
                  </BBAvatar>
                  <Text style={styles.mainFastActionCardContainerDescription}>
                    Transferir
                  </Text>
                </View>
                <View>
                  <Text
                    style={
                      styles.mainFastActionCardContainerDescriptionOwnerText
                    }
                  >
                    Carlos Xavier
                  </Text>
                </View>
              </View>
            </BBCard>
          </TouchableOpacity>
          <BBCard variant="secondary" style={{ width: 128 }}>
            <View id="mainContainer" style={styles.mainFastActionCardContainer}>
              <View
                style={
                  styles.mainFastActionCardContainerAvatarDescriptionContainer
                }
              >
                <BBAvatar style={{ backgroundColor: "#DAEFED" }}>
                  <LucideCreditCard size={20} color={"#006576"} />
                </BBAvatar>
                <Text style={styles.mainFastActionCardContainerDescription}>
                  Pagar
                </Text>
              </View>
              <View>
                <Text
                  style={styles.mainFastActionCardContainerDescriptionOwnerText}
                >
                  Tarjeta Visa
                </Text>
              </View>
            </View>
          </BBCard>
          <BBCard variant="secondary" style={{ width: 128 }}>
            <View id="mainContainer" style={styles.mainFastActionCardContainer}>
              <View
                style={
                  styles.mainFastActionCardContainerAvatarDescriptionContainer
                }
              >
                <BBAvatar style={[{ backgroundColor: "#E9F9CE" }]}>
                  <LucideHome size={20} color={"#374D21"} />
                </BBAvatar>
                <Text style={styles.mainFastActionCardContainerDescription}>
                  Pagar
                </Text>
              </View>
              <View>
                <Text
                  style={styles.mainFastActionCardContainerDescriptionOwnerText}
                >
                  Renta depto
                </Text>
              </View>
            </View>
          </BBCard>
          <BBCard variant="secondary" style={{ width: 128 }}>
            <View id="mainContainer" style={styles.mainFastActionCardContainer}>
              <View
                style={
                  styles.mainFastActionCardContainerAvatarDescriptionContainer
                }
              >
                <BBAvatar style={[{ backgroundColor: "#E0F3FE" }]}>
                  <LucideWifi size={20} color={"#065C86"} />
                </BBAvatar>
                <Text style={styles.mainFastActionCardContainerDescription}>
                  Pagar
                </Text>
              </View>
              <View>
                <Text
                  style={styles.mainFastActionCardContainerDescriptionOwnerText}
                >
                  Internet
                </Text>
              </View>
            </View>
          </BBCard>
        </ScrollView>
      </ContentContainer>
    </>
  );
}

const styles = StyleSheet.create({
  mainTitleHeaderContainer: {
    paddingLeft: 8,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitleHeaderText: {
    fontFamily: "Lexend_500Medium",
    fontSize: 16,
    color: "#212529",
    lineHeight: 40,
    textAlignVertical: "center",
  },
  mainTitleHeaderTextGreen: {
    fontFamily: "Lexend_500Medium",
    fontSize: 16,
    color: "#008392",
    lineHeight: 40,
    textAlignVertical: "center",
  },

  mainBBCarouselContentContainer: {
    flexDirection: "row",
    gap: 8,
  },
  mainBBBannerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainBBBannerTextContainer: {
    padding: 16,
  },

  mainBBBannerTextTitle: {
    fontFamily: "Lexend_700Bold",
    fontSize: 14,
    color: "#212529",
    lineHeight: 21,
    textAlignVertical: "center",
  },
  mainBBBannerTextDescription: {
    fontFamily: "Lexend_400Regular",
    fontSize: 12,
    color: "#212529",
    lineHeight: 24,
    textAlignVertical: "center",
  },
  mainBBCardImage: {
    width: 144,
    height: 110,
    objectFit: "cover",
  },

  mainSectionTextTitle: {
    fontFamily: "Lexend_500Medium",
    fontSize: 16,
    color: "#212529",
    lineHeight: 18,
    textAlignVertical: "center",
  },

  mainProductCardMainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: 280,
    gap: 16,
  },
  mainProductCardMainContentContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 12,
  },
  mainProductCardMainContentContainerTextTitle: {
    fontFamily: "Lexend_400Regular",
    fontSize: 16,
    color: "#212529",
    lineHeight: 24,
    textAlignVertical: "center",
  },
  mainProductCardMainContentContainerTextDescription: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#6C757D",
    lineHeight: 21,
    textAlignVertical: "center",
  },
  mainProductCardMainContentContainerMoneyTextDescription: {
    fontFamily: "Lexend_400Regular",
    fontSize: 12,
    color: "#6C757D",
    lineHeight: 18,
    textAlignVertical: "center",
  },
  mainProductCardMainContentContainerMoneyTextTitle: {
    fontFamily: "Lexend_700Bold",
    fontSize: 24,
    color: "#212529",
    lineHeight: 32,
    textAlignVertical: "center",
  },

  mainFastActionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainFastActionButtonText: {
    fontFamily: "Lexend_500Medium",
    fontSize: 14,
    color: "#008392",
    lineHeight: 20,
    textAlignVertical: "center",
  },
  mainFastActionCardContainer: {
    flexDirection: "column",
    gap: 12,
  },
  mainFastActionCardContainerAvatarDescriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  mainFastActionCardContainerDescription: {
    fontFamily: "Lexend_400Regular",
    fontSize: 12,
    color: "#6C757D",
    lineHeight: 18,
    textAlignVertical: "center",
  },
  mainFastActionCardContainerDescriptionOwnerText: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#212529",
    lineHeight: 21,
    textAlignVertical: "center",
  },
});
