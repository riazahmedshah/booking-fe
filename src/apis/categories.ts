import type { Category } from './types'

const categories: Category[] = [
  { id: 'cabins', label: 'Cabins', icon: 'cabin', active: true },
  { id: 'beachfront', label: 'Beachfront', icon: 'beach_access' },
  { id: 'treehouses', label: 'Treehouses', icon: 'forest' },
  { id: 'countryside', label: 'Countryside', icon: 'agriculture' },
  { id: 'mountain-view', label: 'Mountain View', icon: 'landscape' },
  { id: 'amazing-pools', label: 'Amazing Pools', icon: 'pool' },
  { id: 'trending', label: 'Trending', icon: 'local_fire_department' },
  { id: 'tiny-homes', label: 'Tiny Homes', icon: 'house_siding' },
]

export function fetchCategories(): Promise<Category[]> {
  return Promise.resolve(categories)
}