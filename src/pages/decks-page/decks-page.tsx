import { useGetDecksQuery } from '@/services/base-api.ts'

export const DecksPage = () => {
  const result = useGetDecksQuery()

  return <div>DecksPage</div>
}
