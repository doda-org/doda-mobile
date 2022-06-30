import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function UrlInput(props) {
  const [enteredUrl, setEnteredUrl] = useState("");
  function urlInputHandler(text) {
    setEnteredUrl(text);
  }
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
          // placeholderTextColor="#cccccc"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Calcel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add URL"
              onPress={() => {
                props.onAddUrl(enteredUrl);
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
    // marginBottom: 24,
    margin: 8,
    // backgroundColor: "#eeeeee",
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
