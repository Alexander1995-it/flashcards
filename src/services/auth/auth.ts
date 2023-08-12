import { fleahcardsApi } from "../";

import { User } from "@/services/auth/types.ts";

export const authApi = fleahcardsApi.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<User, { token: string }>({
      query: () => ({
        url: "v1/auth/me",
      }),
      providesTags: ["me"],
    }),
    login: builder.mutation<void, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: "v1/auth/login",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["me"],
    }),
  }),
});

export const { useMeQuery, useLoginMutation } = authApi;
