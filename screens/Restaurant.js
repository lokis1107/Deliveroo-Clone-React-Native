import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MenuCard from "../components/MenuCard";
import CartIcon from "../components/CartIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../redux-slice/RestaurantSlice";

const Restaurant = () => {
  const {
    params: { id, img, title, rating, address, desc, dishes, lat, long },
  } = useRoute();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        img,
        title,
        rating,
        address,
        desc,
        dishes,
        lat,
        long,
      })
    );
  }, []);

  return (
    <>
      <CartIcon />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View>
          <Image source={{ uri: urlFor(img).url() }} className="w-full h-72" />
          <View className="absolute">
            <Pressable
              onPress={() => navigation.goBack()}
              className="p-2 mt-8 rounded-full bg-white mx-2"
            >
              <Ionicons
                name="arrow-back"
                size={30}
                color={themeColors.bgColor(1)}
              />
            </Pressable>
          </View>
        </View>
        <View className="bg-white rounded-b-3xl">
          <View className="mt-3 mx-4">
            <Text className="text-2xl font-bold text-gray-900">{title}</Text>
          </View>
          <View className="flex-row items-center mx-4 mt-2">
            <Image
              source={require("../images/fullStar.png")}
              className="h-6 w-6"
            />
            <Text className="ml-3 text-lg mr-2">{rating} • Offers</Text>
            <FontAwesome5
              name="map-marker-alt"
              size={25}
              color={themeColors.bgColor(1)}
            />
            <Text className="ml-1">Nearby {address}</Text>
          </View>
          <View className="mt-2 mx-4 mb-4">
            <Text style={{ fontSize: 17 }} className="font-semibold">
              {desc}
            </Text>
          </View>
          <Text style={{ borderColor: "gray", height: 1, borderWidth: 0.2 }} />
          <View className="flex-row items-centern justify-between mx-4">
            <View className="flex-row items-center">
              <AntDesign
                name="questioncircleo"
                size={24}
                color={themeColors.bgColor(1)}
              />
              <Text className="ml-2 text-lg font-bold text-gray-900 mb-4 mt-3">
                Have a food allergy?
              </Text>
            </View>

            <View className="mt-4">
              <AntDesign
                name="right"
                size={24}
                color={themeColors.bgColor(1)}
              />
            </View>
          </View>
          <Text
            style={{ borderColor: "gray", height: 1, borderWidth: 0.2 }}
            className="mb-6"
          />
        </View>
        <Text className="mx-4 text-xl font-bold mt-4 text-gray-900">Menu</Text>

        {/* Menu Card part */}
        {dishes.map((item, index) => (
          <MenuCard
            key={index}
            id={item._id}
            name={item.name}
            desc={item.description}
            img={item.image}
            price={item.price}
          />
        ))}
      </ScrollView>

      {/* Cart icons part */}
    </>
  );
};

export default Restaurant;
