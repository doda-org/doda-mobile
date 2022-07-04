import "react-native-gesture-handler";
import React from "react";
import Settings from "./components/Settings";
import Home from "./components/Home";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar animated={true} backgroundColor="dodgerblue" />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ECF0F1",
  },
});
