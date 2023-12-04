import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { themeColors } from "../theme";
import FeaturderDish from "./FeaturderDish";
import client from "../sanity";

const FeaturedRow = ({ id, title, desc }) => {
  const [restaraunt, setRestaraunt] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured" && _id == $id]{
      ...,
      restaurant[]->{
        ...,
        dishes[]->,
          type->{
            name
          }
      },
    }[0]
    `,
        { id }
      )
      .then((data) => setRestaraunt(data?.restaurant));
  }, []);

  return (
    <>
      <View className="mt-3 mx-2">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-2xl font-bold text-gray-900">{title}</Text>
            <Text>{desc}</Text>
          </View>
          <View>
            <AntDesign
              name="arrowright"
              size={30}
              color={themeColors.bgColor(1)}
            />
          </View>
        </View>

        {/* Featured Card */}
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 3 }}
        >
          {restaraunt?.map((item, index) => (
            <FeaturderDish
              key={index}
              id={item._id}
              img={item.image}
              title={item.name}
              rating={item.rating}
              genre={item.name}
              address={item.address}
              desc={item.description}
              dishes={item.dishes}
              lat={item.lat}
              long={item.long}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default FeaturedRow;
