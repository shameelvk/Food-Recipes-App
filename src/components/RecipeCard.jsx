import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";

const RecipeCard = ({ item, index,navigation }) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <Pressable onPress={()=>navigation.navigate("RecipeDetails",{...item})} className="px-1 w-full flex justify-center mb-4 space-y-1">
        <Image
          source={{ uri: item.strMealThumb }}
          className={`w-full rounded-3xl bg-black ${
            index % 3 === 0 ? "h-56" : "h-72"
          }`}
        />
        <Text className="font-semibold ml-3 text-neutral-600 text-sm">
          {item.strMeal.length > 20
            ? item.strMeal.slice(0, 20) + "..."
            : item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default RecipeCard;
