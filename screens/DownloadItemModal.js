import React from "react";
import { Modal, StyleSheet, View, Text, Button } from "react-native";
import DownloadItemList from "./DownloadItemList";

function DownloadItemModal(props) {
  if (!props.request) return null;
  const { title, items } = props.request;
  return (
    <Modal visible={props.visible} animationType="fade" transparent={true}>
      <View style={styles.modalContent}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <DownloadItemList items={items} style={styles.itemList} />
        <Button onPress={props.onClose} title="Close" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    borderWidth: 2,
    borderRadius: 8,
    flex: 1,
    marginVertical: 128,
    margin: 16,
    padding: 16,
    shadowColor: "grey",
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
});
export default DownloadItemModal;
