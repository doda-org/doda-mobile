import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Modal,
  Image,
  Switch,
} from "react-native";

function UrlInput(props) {
  const [enteredUrl, setEnteredUrl] = useState("");
  const [onlyOffPeak, setOnlyOffPeak] = useState(true);
  function urlInputHandler(text) {
    setEnteredUrl(text);
  }
  const toggleSwitch = () => setOnlyOffPeak((previousState) => !previousState);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text>ADD NEW URL</Text>
        <Image
          source={require("../assets/images/download.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={urlInputHandler}
          value={enteredUrl}
          placeholder="Your URL to download"
        />
        <View style={styles.buttonContainer}>
          <Switch value={onlyOffPeak} onChange={toggleSwitch} />
          <Text style={{ fontWeight: "bold" }}>
            Download during offpeak hours
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add URL"
              onPress={() => {
                props.onAddUrl({ url: enteredUrl, schedule: !onlyOffPeak });
                setEnteredUrl("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    // color: "#cccccc",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
export default UrlInput;
