import apiSlice from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (email) => ({
        url: "/login",
        method: "POST",
        body: { ...email },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
