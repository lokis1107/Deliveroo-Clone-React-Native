import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Restaurant from "../screens/Restaurant";
import Cart from "../screens/Cart";
import PreOrder from "../screens/PreOrder";
import Delivery from "../screens/Delivery";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={PreOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Delivery"
        component={Delivery}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
