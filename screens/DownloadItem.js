import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
function DownloadItem(props) {
  return (
    <View style={styles.downloadItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.item)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.downloadItemText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  downloadItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "dodgerblue",
  },
  downloadItemText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
export default DownloadItem;
