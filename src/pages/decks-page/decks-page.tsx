import { useGetDecksQuery } from '@/services/base-api'

export const DecksPage = () => {
  const result = useGetDecksQuery()

  return <div>DecksPage</div>
}
