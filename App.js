import * as React from "react";
import TabNavigator from "./navigation/TabNavigator";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}
