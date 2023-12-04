import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { AntDesign } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeToCart,
  selectCartItemById,
} from "../redux-slice/CartReduser";

const MenuCard = ({ name, id, desc, img, price }) => {
  const [active, setActive] = useState(false);
  const items = useSelector((state) => selectCartItemById(state, id));
  const dispatch = useDispatch();

  const addToCartItem = () => {
    dispatch(addToCart({ name, id, desc, img, price }));
  };

  const removeToCartItem = () => {
    if (items.length > 0) {
      dispatch(removeToCart({ id }));
    } else {
      setActive(!active);
    }
  };

  return (
    <View className="bg-white mt-3 mb-2 rounded-3xl">
      <Pressable onPress={() => setActive(!active)} className="mb-2 shadow-lg">
        <View className="flex-row items-center justify-between mx-3 mt-2">
          <View className="mt-1">
            <Text className="text-xl font-bold text-gray-900">{name}</Text>
            <View className="w-72">
              <Text className="mt-2">{desc}</Text>
            </View>
            <Text className="mt-2 mx-2 text-lg font-bold text-gray-900">
              ${price}
            </Text>
          </View>
          {/* image part */}
          <View>
            <Image
              source={{ uri: urlFor(img).url() }}
              className="h-24 w-24 mx-2 rounded-xl"
            />
          </View>
        </View>
      </Pressable>
      {active && (
        <View className="flex-row items-center space-x-5 mx-4 mt-3 mb-3">
          <Pressable
            onPress={removeToCartItem}
            className="p-1 rounded-full"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <AntDesign name="minus" size={24} color={"white"} />
          </Pressable>
          <Text className="text-lg font-bold">{items.length}</Text>
          <Pressable
            onPress={addToCartItem}
            className="p-1 rounded-full"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <AntDesign name="plus" size={24} color={"white"} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default MenuCard;
