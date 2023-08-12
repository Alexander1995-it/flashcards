import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const fleahcardsApi = createApi({
  reducerPath: "fleahcardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: ["me"],
});
