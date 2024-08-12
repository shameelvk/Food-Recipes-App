import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
  Square3Stack3DIcon,
  UserIcon,
  UsersIcon,
} from "react-native-heroicons/outline";

import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";

import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import YoutubeIframe from "react-native-youtube-iframe";

const RecipeDetailsScreen = (prop) => {
 
  
  const navigaion = useNavigation();
  let item = prop.route.params;
  
  const [isFavourite, setIsFavourite] = useState(false);
  const [mealData, setMealData] = useState(null);
  useEffect(() => {
    getMeals(item.idMeal);
  }, []);

  const getMeals = async (id) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    if (response.status == 200) {
      console.log(response.data.meals[0]);
      
      setMealData(response.data.meals[0]);
    }
  };

  const ingrediantIndex = (meals) => {
    console.log(meals);
    
    if (!meals) return [];
    let index = [];
    for (let i = 0; i <= 20; i++) {
      if (meals["strIngredient" + i]) {
        index.push(i);
      }
    }
    return index;
  };
  const getYoutubeVideoId = (url) => {
 const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <StatusBar style="light" />
      <View className="justify-center flex-row ">
        <Animated.Image  
         sharedTransitionTag={item.strMeal}
          style={{
            width: "98%",
            height: 450,
            borderRadius: 53,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            marginTop: 4,
          }}
          resizeMode="cover"
          source={{ uri: item.strMealThumb }}
        />
      </View>

      <Animated.View entering={FadeIn.delay(200).duration(1000)} className="w-full absolute flex-row justify-between items-center pt-14">
        <TouchableOpacity
          onPress={() => navigaion.goBack()}
          className="p-2 rounded-full ml-5 bg-white "
        >
          <ChevronLeftIcon color="#fbbf24" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsFavourite(!isFavourite)}
          className="p-2 rounded-full  mr-5 bg-white "
        >
          <HeartIcon color={isFavourite ? "red" : "gray"} />
        </TouchableOpacity>
      </Animated.View>

      <View>
        {mealData ? (
          <View className="px-4 flex justify-between space-y-4 pt-8">
            <Animated.View entering={FadeInDown.duration(700).springify().damping(12)} className="space-y-2">
              <Text className="flex-1 font-bold text-neutral-700 text-2xl">
                {mealData?.strMeal}
              </Text>
              <Text className="flex-1 font-bold text-neutral-500 text-lg">
                {mealData?.strArea}
              </Text>
            </Animated.View >

            <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)}  className="flex-row justify-around">
              <View className="flex items-center rounded-full bg-amber-300 p-2">
                <View className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                  <ClockIcon size={30} strokeWidth={2.5} color={"#525252"} />
                </View>
                <View className="flex items-center py-2 ">
                  <Text className="font-bold text-neutral-700 text-lg">35</Text>
                  <Text className="font-bold text-neutral-700 text-xs">
                    Mins
                  </Text>
                </View>
              </View>
              <View className="flex items-center rounded-full bg-amber-300 p-2">
                <View className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                  <UsersIcon size={30} strokeWidth={2.5} color={"#525252"} />
                </View>
                <View className="flex items-center py-2 ">
                  <Text className="font-bold text-neutral-700 text-lg">01</Text>
                  <Text className="font-bold text-neutral-700 text-xs">
                    Servings
                  </Text>
                </View>
              </View>
              <View className="flex items-center rounded-full bg-amber-300 p-2">
                <View className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                  <FireIcon size={30} strokeWidth={2.5} color={"#525252"} />
                </View>
                <View className="flex items-center py-2 ">
                  <Text className="font-bold text-neutral-700 text-lg">
                    350
                  </Text>
                  <Text className="font-bold text-neutral-700 text-xs">
                    Cal
                  </Text>
                </View>
              </View>
              <View className="flex items-center rounded-full bg-amber-300 p-2">
                <View className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                  <Square3Stack3DIcon
                    size={30}
                    strokeWidth={2.5}
                    color={"#525252"}
                  />
                </View>
                <View className="flex items-center py-2 ">
                  <Text className="font-bold text-neutral-700 text-lg"></Text>
                  <Text className="font-bold text-neutral-700 text-xs">
                    Easy
                  </Text>
                </View>
              </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(200).duration(700).springify().damping(12)} className="space-y-4">
              <Text className="text-xl font-bold flex-1 text-neutral-700">
                Ingredents
              </Text>
              <View className="space-y-2 ml-3">
                {ingrediantIndex(mealData).map((i) => {
                  return (
                    <View key={i} className="space-x-4 flex-row items-center">
                      <View className="h-4 w-4 bg-amber-300 rounded-full" />
                      <View className="flex-row space-x-2">
                        <Text className="font-extrabold text-neutral-700">
                          {mealData["strMeasure" + i]}
                        </Text>
                        <Text className="font-medium text-neutral-600">
                          
                          {mealData["strIngredient" + i]}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(300).duration(700).springify().damping(12)} className="space-y-4">
              <Text className="text-xl font-bold flex-1 text-neutral-700">
                Instructions
              </Text>
              <Text className="text-neutral-700 font-semibold text-xs">
                {mealData?.strInstructions}
              </Text>
            </Animated.View>

            {mealData.strYoutube && (
              <Animated.View entering={FadeInDown.delay(400).duration(700).springify().damping(12)} className="space-y-4">
                <Text className="text-xl font-bold flex-1 text-neutral-700">
                  Recipe Video
                </Text>
                <View>
                  <YoutubeIframe
                    videoId={getYoutubeVideoId(mealData.strYoutube)}
                    height={250}
                  />
                </View>
              </Animated.View>
            )}
          </View>
        ) : (
          <ActivityIndicator size={"large"} className="mt-20" />
        )}
      </View>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;
