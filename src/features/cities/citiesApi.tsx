import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ExtendedWeatherTypes, CurrentWeatherTypes } from "../../types";

export const apiSliceExtendedWeather = createApi({
  reducerPath: "apiWeather",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${process.env.REACT_APP_API_HOST}/`,
    prepareHeaders(headers) {
      headers.set("x-rapidapi-key", `${process.env.REACT_APP_WEATHER_API_KEY}`);
      headers.set("x-rapidapi-host", `${process.env.REACT_APP_API_HOST}`);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchCities: builder.query<ExtendedWeatherTypes, number | void>({
        query(cityId = 6058560) {
          return `/forecast/daily?city_id=${cityId}`;
        },
      }),
    };
  },
});

export const apiSliceCurrentWeather = createApi({
  reducerPath: "apiCurrentWeather",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${process.env.REACT_APP_API_HOST}/`,
    prepareHeaders(headers) {
      headers.set("x-rapidapi-key", `${process.env.REACT_APP_WEATHER_API_KEY}`);
      headers.set("x-rapidapi-host", `${process.env.REACT_APP_API_HOST}`);
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
export const { useFetchCitiesQuery } = apiSliceExtendedWeather;
