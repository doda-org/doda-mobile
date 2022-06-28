import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import DownloadItemList from "./screens/DownloadItemList";
import UrlInput from "./screens/UrlInput";

export default function App() {
  const [downloadUrls, setDownloadUrls] = useState([]);
  const [modalIsVisibal, setModalIsVisible] = useState(false);

  function startAddUrlHandler() {
    setModalIsVisible(true);
  }
  function deleteItemHandler(item) {
    alert("DELETING: '" + item.text + "'");
    setDownloadUrls((currentDownloadUrls) => {
      return currentDownloadUrls.filter((url) => url.key !== item.key);
    });
  }

  function addUrlHandler(enteredUrl) {
    setDownloadUrls((currentDownloadUrls) => [
      ...currentDownloadUrls,
      { key: Math.random().toString(), text: enteredUrl },
    ]);
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Url" onPress={startAddUrlHandler} />
      <UrlInput
        onAddUrl={addUrlHandler}
        onCancel={() => setModalIsVisible(false)}
        visible={modalIsVisibal}
      />
      <DownloadItemList urls={downloadUrls} onDeleteItem={deleteItemHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    width: "100%",
  },
});
