import { useQuery } from '@tanstack/react-query'
import { fetchRestaurant } from '../api/restaurant.api'

export const useRestaurant = (id: string) =>
  useQuery({ queryKey: ['restaurant', id], queryFn: () => fetchRestaurant(id) })
