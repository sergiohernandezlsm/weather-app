import { configureStore } from "@reduxjs/toolkit";
import { apiSliceWeather } from "../features/cities/citiesApi";

export const store = configureStore({
  reducer: {
    [apiSliceWeather.reducerPath]: apiSliceWeather.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSliceWeather.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
