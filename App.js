import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigation from "./navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import {} from "redux";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar style="auto" />
        <AppNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
