import { useGetBreedsQuery } from "./petApiService"
export default function useBreedList (animal) {
  const { date: breeds, isLoading } = useGetBreedsQuery(animal, {
    skip: !animal,
  })
  if (!animal) return [[], 'loaded']
  return [breeds ?? [], isLoading ? 'loading' : 'loaded']
}
