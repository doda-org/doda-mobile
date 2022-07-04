import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DownloadItem(props) {
  const { title, progress } = props.item;

  return (
    <View style={styles.itemRow}>
      <Text>{"\u2022"} </Text>
      <Text numberOfLines={2}>{title}</Text>
      <Text>{progress}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
  },
  itemTitle: {},
});
export default DownloadItem;
