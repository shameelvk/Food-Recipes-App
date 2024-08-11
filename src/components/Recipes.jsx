import { View, Text } from 'react-native'
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import RecipeCard from './RecipeCard';

const Recipes = ({data}) => {
  return (
    <View className="mx-4 space-y-3">
      <Text className=" font-semibold text-neutral-600">Recipes</Text>
      <View>
      <MasonryList
  data={data}
  keyExtractor={(item) => item.id}
  numColumns={2}
  showsVerticalScrollIndicator={false}
  renderItem={({item,i}) => <RecipeCard item={item} index={i} />}
 
 
  onEndReachedThreshold={0.1}
/>
      </View>
    </View>
  )
}

export default Recipes