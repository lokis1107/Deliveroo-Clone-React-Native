import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import * as Progress from "react-native-progress";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const PreOrder = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      //navigation part
      navigation.navigate("Delivery");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Image source={require("../images/delivery.gif")} className="h-72 w-72" />
      <Text className="text-lg font-bold mt-10">
        Waiting for restaurant to accecpt your order
      </Text>
      <View className="mt-10">
        <Progress.Circle
          size={50}
          indeterminate={true}
          color={themeColors.bgColor(1)}
        />
      </View>
    </View>
  );
};

export default PreOrder;
