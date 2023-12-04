import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const FeaturderDish = ({
  id,
  img,
  title,
  rating,
  genre,
  address,
  desc,
  dishes,
  lat,
  long,
}) => {
  const navigation = useNavigation();
  return (
    <View className="bg-white rounded-3xl shadow-2xl mt-2 mx-2">
      <Pressable
        onPress={() =>
          navigation.navigate("Restaurant", {
            id,
            img,
            title,
            rating,
            genre,
            address,
            desc,
            dishes,
            long,
            lat,
          })
        }
      >
        <View>
          <Image
            source={{ uri: urlFor(img).url() }}
            className=" h-44 w-72 rounded-t-3xl"
          />
          <Text className="text-2xl font-bold text-gray-900 mt-1 mx-2">
            {title}
          </Text>
          <View className="flex-row items-center mx-2 mt-1">
            <Image
              source={require("../images/fullStar.png")}
              className="h-5 w-5"
            />
            <Text className="ml-2">{rating} reviews •</Text>
            <Text className="ml-2">{genre}</Text>
          </View>
          <View className="flex-row items-center mt-2 mx-2 mb-4">
            <SimpleLineIcons
              name="location-pin"
              size={24}
              color={themeColors.bgColor(1)}
            />
            <Text className="ml-2">{address}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default FeaturderDish;
