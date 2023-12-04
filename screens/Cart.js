import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../redux-slice/RestaurantSlice";
import {
  removeToCart,
  selectCartItem,
  selectCartTotal,
} from "../redux-slice/CartReduser";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { urlFor } from "../sanity";

const Cart = () => {
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectCartItem);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const subTotal = useSelector(selectCartTotal);
  const [cartItems, setCartItems] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setCartItems(groupedItems);
  }, [items]);
  return (
    <>
      <SafeAreaView>
        <View className="flex-row items-center space-x-24">
          <Pressable
            onPress={() => navigation.goBack()}
            className="p-2 mt-2 rounded-full bg-white mx-2"
          >
            <Ionicons
              name="arrow-back"
              size={30}
              color={themeColors.bgColor(1)}
            />
          </Pressable>
          <View className="mt-4">
            <Text className="text-center text-2xl font-bold">Cart Items</Text>
            <Text className="text-center text-xl font-bold">
              {restaurant.title}
            </Text>
          </View>
        </View>
        <View className="mt-3 p-1 bg-white flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image
              source={require("../images/bikeGuy.png")}
              className="h-16 w-16"
            />
            <Text className="text-lg font-semibold">
              Order Deliver in 20-50 minitus
            </Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {Object.entries(cartItems).map(([key, items]) => (
            <View
              className="flex-row items-center justify-between space-x-8 mt-3 bg-white py-2 px-5"
              key={key}
            >
              <View className="flex-row items-center space-x-3">
                <Text>{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.img).url() }}
                  className="h-12 w-12 rounded-full"
                />
                <Text>{items[0]?.name}</Text>
              </View>
              <View className="flex-row space-x-3 items-center">
                <Text className="text-lg font-bold">${items[0]?.price}</Text>
                <Pressable onPress={() => dispatch(removeToCart({ id: key }))}>
                  <Text style={{ color: themeColors.text }}>Remove</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
        <View className="bg-white mt-10 p-5 rounded-t-3xl shadow-2xl">
          <View className="flex-row items-center justify-between mx-4">
            <Text className="text-lg">Sub Total</Text>
            <Text className="text-lg">${subTotal}</Text>
          </View>
          <View className="flex-row items-center justify-between mx-4">
            <Text className="text-lg">Delivery Fee</Text>
            <Text className="text-lg">$3.5</Text>
          </View>
          <View className="flex-row items-center justify-between mx-4">
            <Text className="text-lg font-bold text-gray-900">Grand Total</Text>
            <Text className="text-lg font-bold text-gray-900">
              ${subTotal + 3.5}
            </Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Order")}
            className="mt-5 p-3 items-center rounded-2xl"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Text className="text-xl font-bold text-white">Place Order</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Cart;
