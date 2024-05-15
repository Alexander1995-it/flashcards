import { baseQueryWithReauth } from '@/services/base-query-with-reauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,

  endpoints: builder => {
    return {
      getDecks: builder.query<any, void>({
        query: () => `v1/decks`,
      }),
    }
  },
  reducerPath: 'baseApi',
  tagTypes: ['Me'],
})

export const { useGetDecksQuery } = baseApi
