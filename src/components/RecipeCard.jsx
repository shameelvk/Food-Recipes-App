import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const RecipeCard = ({item,index}) => {
    console.log(index);
    
   console.log(index%2==0);
   
  return (
    <View>
      <Pressable  className="px-1 w-full flex justify-center mb-4 space-y-1">
        <Image  source={{uri:item.strMealThumb}} 
        className={`w-full rounded-3xl bg-black ${index % 3 === 0 ? 'h-56' : 'h-72'}`}
        />

      </Pressable>
    </View>
  )
}

export default RecipeCard