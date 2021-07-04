import { configureStore } from "@reduxjs/toolkit";
import {
  apiSliceExtendedWeather,
  apiSliceCurrentWeather,
} from "../features/cities/citiesApi";

export const store = configureStore({
  reducer: {
    [apiSliceExtendedWeather.reducerPath]: apiSliceExtendedWeather.reducer,
    [apiSliceCurrentWeather.reducerPath]: apiSliceCurrentWeather.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      apiSliceCurrentWeather.middleware,
      apiSliceExtendedWeather.middleware
    );
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
