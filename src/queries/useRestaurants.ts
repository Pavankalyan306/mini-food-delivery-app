import { useQuery } from '@tanstack/react-query'
import { fetchRestaurants } from '../api/restaurant.api'

export const useRestaurants = () =>
  useQuery({ queryKey: ['restaurants'], queryFn: fetchRestaurants })
