import { Text } from 'react-native'
import React from 'react'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'

const Trending = ( posts ) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    />
    </GestureHandlerRootView>
  )
}

export default Trending;