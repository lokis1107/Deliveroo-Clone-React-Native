import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../redux-slice/RestaurantSlice";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { featured } from "../dummy-data";

const Delivery = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const restaurants = featured.restaurants[0];
  return (
    <View className="flex-1">
      <View>
        <View className="flex-row items-center justify-between mt-10 z-50 mx-4">
          <Pressable onPress={() => navigation.navigate("Home")}>
            <MaterialIcons
              name="cancel"
              size={40}
              color={themeColors.bgColor(1)}
            />
          </Pressable>
          <Text className="text-xl font-bold text-gray-900">On help?</Text>
        </View>
        <View className="mt-5 p-3 bg-white z-50 mx-4 rounded-2xl shadow-2xl">
          <View className="flex-row items-center justify-between mx-1">
            <View>
              <Text className=" text-xl">Estimate Arraivel</Text>
              <Text className=" text-3xl mt-1 font-bold">45-55 Minitus</Text>
              <View className="mt-2">
                <Progress.Bar
                  size={50}
                  indeterminate={true}
                  color={themeColors.bgColor(1)}
                />
              </View>
              <Text className="mt-2 text-lg mb-1">
                Your Order has been arraival soon!
              </Text>
            </View>
            <View className="-mx-2">
              <Image
                source={require("../images/bikeGuy2.gif")}
                className=" h-24 w-24"
              />
            </View>
          </View>
        </View>
      </View>
      <View className="flex-1">
        <MapView
          initialRegion={{
            latitude: restaurants.lat,
            longitude: restaurants.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          className="flex-1"
          mapType="standard"
        >
          <Marker
            coordinate={{
              latitude: restaurants.lat,
              longitude: restaurants.lng,
            }}
            title={restaurant.title}
            description={restaurant.desc}
            pinColor={themeColors.bgColor(1)}
          />
        </MapView>
      </View>
    </View>
  );
};

export default Delivery;
