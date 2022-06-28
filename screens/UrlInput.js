import React, { useState } from "react";

import { View, StyleSheet, Text, TextInput, Button, Modal } from "react-native";

function UrlInput(props) {
  const [enteredUrl, setEnteredUrl] = useState("");
  function urlInputHandler(text) {
    setEnteredUrl(text);
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text>ADD NEW URL</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={urlInputHandler}
          value={enteredUrl}
          placeholder="Your URL to download"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add URL"
              onPress={() => {
                props.onAddUrl(enteredUrl);
                setEnteredUrl("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="Calcel" onPress={props.onCancel} />
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
export default UrlInput;
