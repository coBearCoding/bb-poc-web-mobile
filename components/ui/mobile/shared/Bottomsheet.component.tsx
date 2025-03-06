import React, { useCallback, useState, forwardRef, ReactNode } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Text } from "react-native-paper";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { LucideArrowUp, LucideX } from "lucide-react-native";

interface BBBottomSheetProps extends Omit<BottomSheetModalProps, "children"> {
  children?: ReactNode;
  isOpened?: boolean;
  onClose?: () => void;
  leadButton?: boolean;
  closeButton?: boolean;
  headerTitle?: string;
}

const BBBottomSheet = React.memo(
  forwardRef<BottomSheetModal, BBBottomSheetProps>((props, ref) => {
    return (
      <>
        {/* Overlay */}
        {props.isOpened && (
          <TouchableWithoutFeedback onPress={props.onClose}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
        )}
        <BottomSheetModal
          ref={ref}
          {...props}
          backgroundStyle={styles.bottomSheetBackgroundStyle}
        >
          <View style={styles.headerContainer}>
            <View style={styles.headerOptionsContainer}>
              <LucideArrowUp
                size={24}
                color={props.leadButton ? "#212529" : "transparent"}
              />
              <Text style={styles.headerTitle}>{props.headerTitle}</Text>
              <LucideX
                size={24}
                color={props.closeButton ? "#212529" : "transparent"}
                onPress={props.onClose}
              />
            </View>
          </View>
          <BottomSheetScrollView
            contentContainerStyle={styles.bottomSheetContent}
          >
            {/* * BottomSheet Header */}

            {props.children}
          </BottomSheetScrollView>
        </BottomSheetModal>
      </>
    );
  })
);

// Set the display name for better debugging
BBBottomSheet.displayName = "BBBottomSheet";

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  bottomSheetBackgroundStyle: {
    borderRadius: 20,
  },

  headerContainer: {
    flexDirection: "column",
    paddingVertical: 8,
    paddingHorizontal: 12,
    // flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#DEE3E3",
  },

  headerOptionsContainer: {
    flexDirection: "row",
    // flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },

  headerTitle: {
    fontFamily: "Lexend_600SemiBold",
    fontSize: 18,
    color: "#212529",
    lineHeight: 40,
  },

  bottomSheetContent: {
    flex: 1,
    padding: 24,
  },
});

export default BBBottomSheet;
