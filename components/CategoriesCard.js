import { View, Text, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoriesCard = ({ title, img }) => {
  return (
    <View className="ml-2">
      <Image
        source={{ uri: urlFor(img).url() }}
        style={{ height: 80, width: 80 }}
        className="rounded-full"
      />
      <Text className="text-lg font-bold text-gray-900 ml-2">{title}</Text>
    </View>
  );
};

export default CategoriesCard;
