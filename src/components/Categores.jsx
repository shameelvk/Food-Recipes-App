import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';

const Categores = ({data,activeCategory,setActiveCategory}) => {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
        <ScrollView horizontal className="space-x-4" showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:20}} >

{data.map((value,index)=>{
    let isActive=value.strCategory==activeCategory;
    
    let activeClass=isActive?' bg-amber-400 ':' bg-black/10 ';
    return <TouchableOpacity onPress={()=>setActiveCategory(value.strCategory)} key={index} className="flex items-center space-y-1">
        <View className={"rounded-full p-[6px]"+activeClass}>
            <Image source={{uri:value.strCategoryThumb}} resizeMode='contain' className="rounded-full w-14 h-14"/>

        </View>
        <Text className="text-neutral-600 text-base">{value.strCategory}</Text>

    </TouchableOpacity>
        
    
})}
</ScrollView>
    </Animated.View>
  )
}

export default Categores