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
import { ChevronLeftIcon, ClockIcon, FireIcon, Square3Stack3DIcon, UserIcon, UsersIcon } from "react-native-heroicons/outline";

import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

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
      setMealData(response.data.meals[0]);
    }
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <StatusBar style="light" />
      <View className="justify-center flex-row ">
        <Image
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

      <View className="w-full absolute flex-row justify-between items-center pt-14">
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
      </View>

      <View>
        {mealData ? (
          <View className="px-4 flex justify-between space-y-4 pt-8">
                <View className="space-y-2">
                    <Text className="flex-1 font-bold text-neutral-700 text-2xl">{mealData?.strMeal}</Text>
                    <Text className="flex-1 font-bold text-neutral-500 text-lg">{mealData?.strArea}</Text>

                </View>


                <View className="flex-row justify-around">
                    <View className="flex items-center rounded-full bg-amber-300 p-2">
                        <View className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                            <ClockIcon size={30} strokeWidth={2.5} color={"#525252"}/>
                        </View>
                        <View className="flex items-center py-2 ">
                            <Text className="font-bold text-neutral-700 text-lg">35</Text>
                            <Text className="font-bold text-neutral-700 text-xs">Mins</Text>
                        </View>
                    </View>
                    <View className="flex items-center rounded-full bg-amber-300 p-2">
                        <View className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                            <UsersIcon size={30} strokeWidth={2.5} color={"#525252"}/>
                        </View>
                        <View className="flex items-center py-2 ">
                            <Text className="font-bold text-neutral-700 text-lg">01</Text>
                            <Text className="font-bold text-neutral-700 text-xs">Servings</Text>
                        </View>
                    </View>
                    <View className="flex items-center rounded-full bg-amber-300 p-2">
                        <View className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                            <FireIcon size={30} strokeWidth={2.5} color={"#525252"}/>
                        </View>
                        <View className="flex items-center py-2 ">
                            <Text className="font-bold text-neutral-700 text-lg">350</Text>
                            <Text className="font-bold text-neutral-700 text-xs">Cal</Text>
                        </View>
                    </View>
                    <View className="flex items-center rounded-full bg-amber-300 p-2">
                        <View className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                            <Square3Stack3DIcon size={30} strokeWidth={2.5} color={"#525252"}/>
                        </View>
                        <View className="flex items-center py-2 ">
                            <Text className="font-bold text-neutral-700 text-lg"></Text>
                            <Text className="font-bold text-neutral-700 text-xs">Easy</Text>
                        </View>
                    </View>
                </View>


                <View>

                    
                </View>
          </View>
        ) : (
          <ActivityIndicator size={"large"} className="mt-20" />
        )}
      </View>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;
