import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
function Settings({ navigation }) {
  const [hostname, setHostname] = useState("");
  function hostnameInputHandler(text) {
    setHostname(text);
  }
  return (
    <View style={styles.inputContainer}>
      <View style={styles.buttonContainer}>
        <Text>Host: </Text>
        <TextInput
          style={styles.textInput}
          value={hostname}
          placeholder="hostname"
          onChangeText={hostnameInputHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "flex-start",
    // marginBottom: 24,
    margin: 8,
    // backgroundColor: "#eeeeee",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "90%",
    padding: 8,
    // color: "#cccccc",
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 16,
    alignItems: "center",
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

export default Settings;
