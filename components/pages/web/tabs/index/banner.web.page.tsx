import BBBanner from "@/components/ui/shared/Banner.component";
import BBCarousel from "@/components/ui/shared/Carousel.component";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Image } from "expo-image";
import { ScrollView } from "react-native-gesture-handler";

const CoupleImage = require("@assets/images/webpg/couple.webp");
const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

export default function BannerPage() {
  const router = useRouter();

  const carouselRef = useRef(null);

  return (
    <ScrollView horizontal>
      <BBCarousel
        ref={carouselRef}
        data={data}
        style={styles.mainBBCarouselContentContainer}
        renderItem={({ item }) => (
          <BBBanner style={{ backgroundColor: "#fff" }}>
            <View style={styles.mainBBBannerContent}>
              <View id="Texts" style={styles.mainBBBannerTextContainer}>
                <Text style={styles.mainBBBannerTextTitle}>
                  ¡Haz crecer tu dinero! Gana hasta un 6.8% de interés
                </Text>
                <Text style={styles.mainBBBannerTextDescription}>
                  Tu dinero en una inversión segura. Simula y crea tu inversión
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainBBCarouselContentContainer: {
    flexDirection: "row",
    gap: 24,
  },
  mainBBBannerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainBBBannerTextContainer: {
    padding: 16,
    maxWidth: 408,
  },

  mainBBBannerTextTitle: {
    fontFamily: "Lexend_700Bold",
    fontSize: 16,
    color: "#212529",
    lineHeight: 21,
    textAlignVertical: "center",
  },
  mainBBBannerTextDescription: {
    fontFamily: "Lexend_400Regular",
    fontSize: 12,
    color: "#495057",
    lineHeight: 18,
    textOverflow: "ellipsis",
    textAlignVertical: "center",
  },
  mainBBCardImage: {
    width: 195,
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
  mainFastActionCardContainerAvatar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE4E4",
    width: 32,
    height: 32,
    borderRadius: 36,
  },
  mainFastActionCardContainerDescriptionOwnerText: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#212529",
    lineHeight: 21,
    textAlignVertical: "center",
  },
});
