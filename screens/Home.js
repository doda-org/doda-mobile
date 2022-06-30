import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import DownloadItemList from "./DownloadItemList";
import UrlInput from "./UrlInput";
import { FloatingAction } from "react-native-floating-action";

function Home({ navigation }) {
  const [downloadUrls, setDownloadUrls] = useState([]);
  const [modalIsVisibal, setModalIsVisible] = useState(false);
  var floatingAction;

  const actions = [
    {
      text: "Add YouTube Video",
      name: "youtube",
      position: 1,
      icon: require("../assets/icon.png"),
    },
  ];
  function startAddUrlHandler() {
    setModalIsVisible(true);
    return true;
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
      <UrlInput
        onAddUrl={addUrlHandler}
        onCancel={() => {
          setModalIsVisible(false);
        }}
        visible={modalIsVisibal}
      />
      <DownloadItemList urls={downloadUrls} onDeleteItem={deleteItemHandler} />
      <FloatingAction
        actions={actions}
        color="dodgerblue"
        onPressItem={(name) => {
          startAddUrlHandler();
        }}
        overrideWithAction={true}
      />
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

export default Home;
