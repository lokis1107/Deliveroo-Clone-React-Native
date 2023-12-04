import { View, Text, Pressable } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItem, selectCartTotal } from "../redux-slice/CartReduser";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
  const items = useSelector(selectCartItem);
  const total = useSelector(selectCartTotal);
  const navigation = useNavigation();
  return (
    <>
      {items.length > 0 ? (
        <View className="bottom-10 absolute z-50 w-full">
          <Pressable
            onPress={() => navigation.navigate("Cart")}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className=" p-4 rounded-xl flex-row mx-5 items-center justify-between"
          >
            <View
              className="p-1 w-7 items-center rounded-lg"
              style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            >
              <Text className="text-xl font-bold text-white ">
                {items.length}
              </Text>
            </View>
            <View>
              <Text className="text-xl font-bold text-white">Cart Items</Text>
            </View>
            <View>
              <Text className="text-xl font-bold text-white">${total}</Text>
            </View>
          </Pressable>
        </View>
      ) : null}
    </>
  );
};

export default CartIcon;
