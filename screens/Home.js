import React from "react";
import { useState, useEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import DownloadRequestList from "./DownloadRequestList";
import UrlInput from "./UrlInput";
import { FloatingAction } from "react-native-floating-action";
import axios from "axios";

function Home({ navigation }) {
  const [downloadUrls, setDownloadUrls] = useState([]);
  const [addRequestModalIsVisible, setAddRequestModalIsVisible] =
    useState(false);
  const [update, setUpdate] = useState(false);
  const baseUrl = "http://192.168.1.21:5000";

  const avgPrg = (request) => {
    let sum = 0;
    request.items.forEach((item) => (sum += item.progress));
    return request.items == null || request.items.length === 0
      ? 0
      : sum / request.items.length;
  };

  const getRequests = () => {
    axios
      .get(baseUrl + "/api/requests")
      .then((res) => {
        const requests = res.data;
        requests.map((request) => {
          request.avgPrg = avgPrg(request);
          return request;
        });
        setDownloadUrls(requests);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteRequest = (request) => {
    Alert.alert(
      "Delete Confirmation",
      "Are you sure to delete '" + request.title + "'?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Yes",
          style: "default",
          onPress: () => {
            console.log("delete requested", request);
            axios
              .delete(baseUrl + "/api/requests/" + request.id)
              .then((res) => {
                setUpdate(true);
              });
          },
        },
      ]
    );
  };

  const deleteItem = (itemId) => {
    console.log("delete item requested", itemId);
    axios.delete(baseUrl + "/api/items/" + itemId).then((res) => {
      setUpdate(true);
    });
  };

  const addRequest = (request) => {
    axios.post(baseUrl + "/api/requests", request).then((res) => {
      console.log("submitted");
      setAddRequestModalIsVisible(false);
      setUpdate(true);
    });
  };

  const clearCompletedRequests = () => {
    console.log("clear completed requested");
    axios.delete(baseUrl + "/api/requests").then((res) => {
      setUpdate(true);
    });
  };
  useEffect(() => {
    getRequests();
    const interval = setInterval(getRequests, 10000); // runs every 5 seconds.

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getRequests();
  }, [update]);

  const actions = [
    {
      text: "Add YouTube Video",
      name: "youtube",
      position: 1,
      icon: require("../assets/icon.png"),
    },
  ];
  function startAddUrlHandler() {
    setAddRequestModalIsVisible(true);
    return true;
  }

  function addUrlHandler(request) {
    addRequest(request);
  }

  function viewItems(request) {
    setSelectedRequest(request);
    setItemsModalIsVisible(true);
  }
  return (
    <View style={styles.appContainer}>
      <UrlInput
        onAddUrl={addUrlHandler}
        onCancel={() => {
          setAddRequestModalIsVisible(false);
        }}
        visible={addRequestModalIsVisible}
      />
      <DownloadRequestList
        urls={downloadUrls}
        onDeleteRequest={deleteRequest}
        onViewItems={viewItems}
      />
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
    padding: 5,
    width: "100%",
  },
});

export default Home;
