import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from "@react-navigation/native";


const WelcomeScreem = () => {

  const navigation=useNavigation();
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(()=>{
      ring1padding.value=0;
      ring2padding.value=0;
    setTimeout(() => ring1padding.value = withSpring(ring1padding.value + 40), 100);
    setTimeout(() => ring2padding.value = withSpring(ring2padding.value + 30), 300);

    setTimeout(() => {
      navigation.navigate("Home");
    }, 2500);
   
   
  },[])
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-red-500 ">
      <StatusBar style="light" />

      <Animated.View className="bg-white/20 rounded-full" style={{padding:ring1padding}}>
        <Animated.View className="bg-white/20 rounded-full" style={{padding:ring2padding}}>
          <Image
            source={require("../../assets/welcome.png")}
            style={{ width: 200, height: 200 }}
          />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-2">
        <Text className="font-bold text-white tracking-widest text-6xl ">
          Foody
        </Text>
        <Text className="font-bold text-white tracking-widest text-lg ">
          Food is always right
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreem;
