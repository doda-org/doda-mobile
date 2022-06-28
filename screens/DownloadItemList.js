import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import DownloadItem from "./DownloadItem";
import UrlInput from "./UrlInput";

function DownloadItemList(props) {
  return (
    <View style={styles.downloadListContainer}>
      <FlatList
        data={props.urls}
        renderItem={(itemData) => {
          return (
            <DownloadItem
              onDeleteItem={props.onDeleteItem}
              item={itemData.item}
            />
          );
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  downloadListContainer: {
    flex: 5,
  },
});
export default DownloadItemList;
