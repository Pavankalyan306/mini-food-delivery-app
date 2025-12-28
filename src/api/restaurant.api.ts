export const fetchRestaurants = async () => {
  const res = await fetch('http://localhost:3000/restaurants')
  return res.json()
}

export const fetchRestaurant = async (id: string) => {
  const res = await fetch(`http://localhost:3000/restaurants/${id}`)
  return res.json()
}
