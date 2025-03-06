import { LucideArrowLeft, LucideX } from "lucide-react-native";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Modal, ModalProps, Portal, Text } from "react-native-paper";

interface BBModal extends Omit<ModalProps, "children"> {
  children?: ReactNode;
  onClose?: () => void;
  leadButton?: boolean;
  closeButton?: boolean;
  headerTitle?: string;
}

export default function BBModal(props: BBModal) {
  return (
    <>
      <Portal>
        <Modal
          onDismiss={props.onClose}
          contentContainerStyle={styles.mainModalContainer}
          {...props}
        >
          <View style={styles.modalHeaderContainer}>
            <LucideArrowLeft
              size={24}
              style={{ cursor: "pointer" }}
              color={props.leadButton ? "#212529" : "transparent"}
            />

            <Text style={styles.modalHeaderTitle}>{props.headerTitle}</Text>
            <LucideX
              size={24}
              style={{ cursor: "pointer" }}
              color={props.closeButton ? "#212529" : "transparent"}
              onPress={props.onClose}
            />
          </View>
          <View style={styles.modalContentContainer}>{props.children}</View>
        </Modal>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  mainModalContainer: {
    padding: 1,
    maxHeight: 568,
    maxWidth: 604,
    width: "auto",
    backgroundColor: "#fff",
    borderRadius: 24,
    marginLeft: "auto",
    marginRight: "auto",
  },
  modalHeaderContainer: {
    padding: 24,
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 24,
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#DEE3E3",
  },

  modalHeaderTitle: {
    fontFamily: "Lexend_600SemiBold",
    fontSize: 18,
    color: "#212529",
    lineHeight: 40,
  },

  modalContentContainer: {
    padding: 24,
  },
});
