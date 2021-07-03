import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherInterface } from "../../types";

const WEATHER_API_KEY = "cc1ff834bdmsh5b9eaa75a1d2da2p13f921jsn15c0e96f3ee8";
const API_HOST = "weatherbit-v1-mashape.p.rapidapi.com";

export const apiSliceWeather = createApi({
  reducerPath: "apiWeather",
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
      fetchCities: builder.query<WeatherInterface, number | void>({
        query(cityId = 6058560) {
          return `/forecast/daily?city_id=${cityId}`;
        },
      }),
    };
  },
});

export const { useFetchCitiesQuery } = apiSliceWeather;
