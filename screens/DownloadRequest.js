import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import DownloadItemModal from "./DownloadItemModal";

function DownloadRequest(props) {
  const { url, status, progress, items, title, type, uploader } = props.request;

  const ProgressText = () => {
    return status > 0 && status < 3 ? ` [${progress.toFixed(2)}%]` : "";
  };

  function viewItemsModal() {
    console.log("view items of " + title);
    setItemsModalIsVisible(true);
  }
  const [itemsModalIsVisible, setItemsModalIsVisible] = useState(false);
  return (
    <View style={styles.request}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onLongPress={props.onDeleteRequest.bind(this, props.request)}
        onPress={viewItemsModal}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.requestTitle} numberOfLines={1}>
          <ProgressText />
          {title}
        </Text>
        <Text style={styles.requestUploader} numberOfLines={1}>
          {uploader}
        </Text>
      </Pressable>
      <DownloadItemModal
        request={props.request}
        visible={itemsModalIsVisible}
        onClose={() => setItemsModalIsVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  request: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "dodgerblue",
  },
  requestTitle: {
    color: "white",
    padding: 8,
    paddingBottom: 0,
    flexWrap: "wrap",
  },
  requestUploader: {
    color: "white",
    fontStyle: "italic",
    padding: 8,
    paddingTop: 0,
    flexWrap: "wrap",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
export default DownloadRequest;
