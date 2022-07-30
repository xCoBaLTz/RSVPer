import apiSlice from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (email) => ({
        url: "/token",
        method: "POST",
        body: { ...email },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
