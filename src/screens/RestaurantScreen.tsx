import React from 'react'
import { View, Text, Button } from 'react-native'
import { useRestaurant } from '../queries/useRestaurant'
import { useCartStore } from '../store/cart.store'

export const RestaurantScreen = ({ route }: any) => {
  const { id } = route.params
  const { data } = useRestaurant(id)
  const addItem = useCartStore(state => state.addItem)

  if (!data) return null

  return (
    <View>
      <Text>{data.name}</Text>
      {data.menu.map((item: any) => (
        <View key={item.id}>
          <Text>{item.name} - ₹{item.price}</Text>
          <Button title="Add" onPress={() => addItem(item)} />
        </View>
      ))}
    </View>
  )
}
