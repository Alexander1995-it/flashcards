import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
  }),

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
