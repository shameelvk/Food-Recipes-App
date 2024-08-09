import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { BellIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        className=" space-y-6 pt-14 "
      >
        <View className="flex-row justify-between items-center mb-2 mx-4">
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
            }}
            style={{ width: "5%", height: "5%" }}
          />
          <BellIcon size={2}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
