import React from "react";
import { Modal, StyleSheet, View, Text, Button } from "react-native";
import DownloadItemList from "./DownloadItemList";

function DownloadItemModal(props) {
  const { title, items, uploader } = props.request;
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.modalContent}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.uploader}>
          {uploader}
        </Text>
        <DownloadItemList items={items} style={styles.itemList} />
        <Button onPress={props.onClose} title="Close" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "stretch",
  },
  itemList: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontWeight: "bold",
  },
  uploader: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
export default DownloadItemModal;
