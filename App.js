import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DownloadItemList from "./screens/DownloadItemList";
import UrlInput from "./screens/UrlInput";

export default function App() {
  const [downloadUrls, setDownloadUrls] = useState([]);

  function addUrlHandler(enteredUrl) {
    setDownloadUrls((currentDownloadUrls) => [
      ...currentDownloadUrls,
      { key: Math.random().toString(), text: enteredUrl },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.appContainer}>
        <UrlInput addUrlHandler={addUrlHandler} />
        <DownloadItemList urls={downloadUrls} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
