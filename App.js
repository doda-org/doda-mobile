import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Settings from "./screens/Settings";
import Home from "./screens/Home";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
