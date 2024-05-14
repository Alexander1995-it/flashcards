import { useGetDecksQuery } from '@/services/base-api.ts'

export const DecksPage = () => {
  const result = useGetDecksQuery()

  console.log(result)

  return <div></div>
}
