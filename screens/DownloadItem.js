import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
function DownloadItem(props) {
  function onDeleteItem(item) {
    alert("item: " + item.text + " pressed.");
  }

  return (
    <Pressable onPress={() => onDeleteItem(props.item)}>
      <View style={styles.downloadItem}>
        <Text style={styles.downloadItemText}>{props.item.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  downloadItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  downloadItemText: {
    color: "white",
  },
});
export default DownloadItem;
