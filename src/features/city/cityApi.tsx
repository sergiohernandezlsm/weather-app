import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CurrentWeatherTypes } from "../../types";

const WEATHER_API_KEY = "cc1ff834bdmsh5b9eaa75a1d2da2p13f921jsn15c0e96f3ee8";
const API_HOST = "weatherbit-v1-mashape.p.rapidapi.com";

export const apiSliceCurrentWeather = createApi({
  reducerPath: "apiCurrentWeather",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://weatherbit-v1-mashape.p.rapidapi.com/`,
    prepareHeaders(headers) {
      headers.set("x-rapidapi-key", WEATHER_API_KEY);
      headers.set("x-rapidapi-host", API_HOST);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchCity: builder.query<CurrentWeatherTypes, number | void>({
        query(lat = 51.50853, lon = -0.12574) {
          return `/current?lat=${lat}&lon=${lon}`;
        },
      }),
    };
  },
});

export const { useFetchCityQuery } = apiSliceCurrentWeather;
