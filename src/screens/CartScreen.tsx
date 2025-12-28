import React from 'react'
import { View, Text, Button } from 'react-native'
import { useCartStore } from '../store/cart.store'

export const CartScreen = () => {
  const items = useCartStore(state => state.items)
  const removeItem = useCartStore(state => state.removeItem)

  return (
    <View>
      {items.map(item => (
        <View key={item.id}>
          <Text>{item.name} x {item.quantity}</Text>
          <Button title="Remove" onPress={() => removeItem(item.id)} />
        </View>
      ))}
    </View>
  )
}
