import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categores from "../components/Categores";
import axios from 'axios';
import Recipes from "../components/Recipes";

const HomeScreen = () => {

  const [categores, setCategores] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [activeCategory, setActiveCategory] = useState("beef")

  useEffect(() => {
    getCategory();
    getRecipes();
  
  }, [])

  const handlechangeCategory=category=>{
    setRecipes([])
    getRecipes(category);
    setActiveCategory(category);
   

  }
  

  const getCategory=async()=>{
      const response=await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");

      if(response.status==200){
        setCategores(response.data.categories)
      }
      
    

  }

  const getRecipes=async(cat="beef")=>{
    const response=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);

    if(response.status==200){
      setRecipes(response.data.meals)
    }
    
  

}
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        className=" space-y-6 pt-14 "
      >
        <View className="flex-row justify-between items-center mb-2 mx-4">
          <View className="h-10 w-10 bg-black justify-center items-center rounded-full overflow-hidden">
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
            }}
            resizeMode="cover"
            style={{ height: "90%",width:"100%" }}
          /> 
          </View>
          
          <BellIcon size={30} color={"gray"}/>
        </View>


        <View className="mx-4 space-y-2 mb-2">
          <Text className="text-neutral-400 text-lg">Hello,Shameel</Text>
          <View>
            <Text className="font-semibold text-neutral-600 text-4xl">Make you own food,</Text>
          </View>
          <Text className="font-semibold text-neutral-600 text-4xl">
            stay at <Text className="font-semibold text-amber-400">home</Text>
          </Text>

        </View>



        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
              <TextInput placeholder="Search any recipe" className="flex-1 text-base mb-1 pl-3 tracking-wider"/>
              <View className="bg-white rounded-full p-3">
                <MagnifyingGlassIcon size={25} color={"grey"}/>
              </View>
        </View>



        <View>
         {categores.length>0&& <Categores data={categores} handlechangeCategory={handlechangeCategory} activeCategory={activeCategory} />}
        </View>


        <View>
         <Recipes data={recipes} cat={categores}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
