import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import RecipeCard from "./RecipeCard";
import { useNavigation } from "@react-navigation/native";

const Recipes = ({ data ,cat}) => {
  const navigation=useNavigation();
  
  return (
    <View className="mx-4 space-y-3">
      <Text className=" font-semibold text-neutral-600 text-xl">Recipes</Text>
      <View>
       {cat.length==0||data.length==0?<ActivityIndicator size={"large"} className="mt-20"/>: <MasonryList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => <RecipeCard item={item} index={i} navigation={navigation}/>}
          onEndReachedThreshold={0.1}
        />}
      </View>
    </View>
  );
};

export default Recipes;
