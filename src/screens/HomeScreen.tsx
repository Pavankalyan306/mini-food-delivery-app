import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useRestaurants } from '../queries/useRestaurants'

export const HomeScreen = ({ navigation }: any) => {
  const { data, isLoading } = useRestaurants()

  if (isLoading) return <Text>Loading...</Text>

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { id: item.id })}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  )
}
