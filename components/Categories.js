import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import client from "../sanity";

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
   *[_type == "category"]{
    ...
  }
   `
      )
      .then((data) => setCategoryList(data));
  }, []);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 10 }}
      >
        {categoryList?.map((item, index) => (
          <CategoriesCard key={index} title={item.name} img={item.image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
