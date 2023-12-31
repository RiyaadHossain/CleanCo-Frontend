import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "../tagTypes";
import { getFromLocalStorage } from "@/utils/local-storage";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://clean-co-backend-r545kc87n-riyaadhossain.vercel.app/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getFromLocalStorage("accessToken");
      if (accessToken) {
        headers.set("Authorization", accessToken);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: tagTypes,
});
