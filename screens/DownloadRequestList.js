import { View, StyleSheet, FlatList } from "react-native";
import DownloadRequest from "./DownloadRequest";

function DownloadRequestList(props) {
  return (
    <View style={styles.downloadListContainer}>
      <FlatList
        data={props.urls}
        renderItem={(itemData) => {
          return (
            <DownloadRequest
              onDeleteRequest={props.onDeleteRequest}
              onViewItems={props.onViewItems}
              request={itemData.item}
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
export default DownloadRequestList;
