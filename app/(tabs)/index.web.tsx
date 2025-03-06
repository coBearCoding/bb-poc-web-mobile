import BBInternalHeader from "@/components/ui/shared/InternalHeader.component";
import { useRouter } from "expo-router";
import {
  LucideArrowLeft,
  LucideBell,
  LucideChevronDown,
  LucideChevronLeft,
  LucideChevronRight,
  LucideCreditCard,
  LucideEye,
  LucideHome,
  LucideShare2,
  LucideUserSquare2,
  LucideWifi,
} from "lucide-react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Image } from "expo-image";
import BBBanner from "@/components/ui/shared/Banner.component";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import { useRef } from "react";
import BBCarousel from "@/components/ui/shared/Carousel.component";
import BBCard from "@/components/ui/shared/Card.component";
import BBSidebar from "@/components/ui/web/Sidebar.componen";
import InternalContentContainer from "@/components/ui/web/InternalContentContainer";
import BBWebNotification from "@/components/ui/web/Notification.component";
import RecentActivityPage from "@/components/pages/web/tabs/index/recent.web.page";
import BannerPage from "@/components/pages/web/tabs/index/banner.web.page";
import FastActionPage from "@/components/pages/web/tabs/index/fastActions.web.page";

const CoupleImage = require("@assets/images/webpg/couple.webp");

const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

export default function IndexWeb() {
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
      <BBSidebar />
      <InternalContentContainer>
        <View style={{ gap: 24 }}>
          <BBWebNotification>
            <Text style={styles.mainWebNotificationTextDescription}>
              Tenemos un producto para ti
            </Text>
            <Text style={styles.mainWebNotificationTextTitle}>
              Más detalles
            </Text>
          </BBWebNotification>
          <View id="MyProducts" style={{ gap: 12 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
              >
                <Text style={styles.mainSectionTextTitle}>Mis productos</Text>
                <LucideChevronLeft />
                <LucideChevronRight />
              </View>
              <View style={styles.mainProductContainer}>
                <Text style={styles.mainProductButtonText}>Ocultar saldos</Text>
              </View>
            </View>
            <ScrollView horizontal contentContainerStyle={{ gap: 24 }}>
              <BBCard variant="secondary">
                <View style={styles.mainProductCardMainContainer}>
                  <View style={styles.mainProductCardMainContentContainer}>
                    <View>
                      <Text
                        style={
                          styles.mainProductCardMainContentContainerTextTitle
                        }
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

              <BBCard variant="secondary">
                <View style={styles.mainProductCardMainContainer}>
                  <View style={styles.mainProductCardMainContentContainer}>
                    <View>
                      <Text
                        style={
                          styles.mainProductCardMainContentContainerTextTitle
                        }
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

              <BBCard variant="secondary">
                <View style={styles.mainProductCardMainContainer}>
                  <View style={styles.mainProductCardMainContentContainer}>
                    <View>
                      <Text
                        style={
                          styles.mainProductCardMainContentContainerTextTitle
                        }
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
              <BBCard variant="secondary">
                <View style={styles.mainProductCardMainContainer}>
                  <View style={styles.mainProductCardMainContentContainer}>
                    <View>
                      <Text
                        style={
                          styles.mainProductCardMainContentContainerTextTitle
                        }
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
          </View>
          <View
            id="Downward Container"
            style={{ flexDirection: "row", gap: 24 }}
          >
            <RecentActivityPage />
            <View style={{ gap: 12, flex: 1 }}>
              <BannerPage />
              <FastActionPage />
            </View>
          </View>
        </View>
      </InternalContentContainer>
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

  mainSectionTextTitle: {
    fontFamily: "Lexend_500Medium",
    fontSize: 16,
    color: "#212529",
    lineHeight: 18,
    textAlignVertical: "center",
  },

  mainWebNotificationTextTitle: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#008329",
    lineHeight: 21,
    textAlignVertical: "center",
  },

  mainWebNotificationTextDescription: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#212529",
    lineHeight: 21,
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
  mainProductContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  mainProductButtonText: {
    fontFamily: "Lexend_500Medium",
    fontSize: 14,
    color: "#008392",
    lineHeight: 20,
    textAlignVertical: "center",
  },
});
