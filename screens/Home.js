import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";

const Home = () => {
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured"]{
      ...,
      restaurant[]->{
        ...dishes[]->
      }
    }
    `
      )
      .then((data) => setFeaturedCategory(data));
  }, []);

  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between mt-1">
        <View className="flex-row items-center">
          <Image
            source={require("../images/bikeGuy.png")}
            className="h-24 w-24 rounded-full"
          />
          <View>
            <Text className="text-lg font-bold text-black">Delivery now!</Text>
            <View className="flex-row items-center">
              <Text
                style={{ color: themeColors.text }}
                className="text-2xl font-bold mr-2"
              >
                Current Location
              </Text>
              <AntDesign
                name="circledown"
                size={20}
                color={themeColors.bgColor(1)}
              />
            </View>
          </View>
        </View>
        <View className="mx-4">
          <Ionicons
            name="person-outline"
            size={35}
            color={themeColors.bgColor(1)}
          />
        </View>
      </View>

      {/* Search area screen */}

      <View className="flex-row items-center justify-between mx-4">
        <View
          style={{ width: "90%" }}
          className="flex-row items-center border rounded-lg p-2"
        >
          <Feather name="search" size={24} color="black" />
          <TextInput placeholder="Restaraunt and cuisine" className="ml-2" />
        </View>
        <View className="ml-2">
          <AntDesign name="bars" size={35} color={themeColors.bgColor(1)} />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
      >
        {/* Categories part */}
        <Categories />

        {/* Featured Dish Part */}
        {featuredCategory?.map((item, index) => {
          return (
            <FeaturedRow
              key={index}
              id={item._id}
              title={item.name}
              desc={item.description}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
