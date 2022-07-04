import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DownloadItem from "./DownloadItem";
function DownloadItemList(props) {
  return (
    <View style={props.style}>
      <FlatList
        data={props.items}
        renderItem={(itemData) => {
          return <DownloadItem item={itemData.item} />;
        }}
      ></FlatList>
    </View>
  );
}

export default DownloadItemList;
