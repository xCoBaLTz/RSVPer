import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RootState } from "../redux/store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.seananandsonia.com",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Invite"],
  endpoints: () => ({}),
});

export default apiSlice;
export const apiReducer = apiSlice.reducer;
