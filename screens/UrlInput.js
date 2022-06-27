import React, { useState } from "react";

import { View, StyleSheet, Text, TextInput, Button } from "react-native";

function UrlInput(props) {
  const [enteredUrl, setEnteredUrl] = useState("");
  function urlInputHandler(text) {
    setEnteredUrl(text);
  }
  return (
    <View style={styles.inputContainer}>
      <Text>URL:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={urlInputHandler}
        value={enteredUrl}
        placeholder="Your URL to download"
      />
      <Button
        title="Add URL"
        onPress={() => {
          props.addUrlHandler(enteredUrl);
          setEnteredUrl("");
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
export default UrlInput;
