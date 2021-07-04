import { ExtendedWeatherTypes, Days } from "../../../types";

export const calByMinTemp = (
  data: ExtendedWeatherTypes[],
  calculator: number,
  index: number
) => {
  return data.map((x: ExtendedWeatherTypes, i: number) => {
    if (index === i) {
      const { data, ...restData } = x;
      const newArray = data.filter((day: Days) => day.temp <= calculator);
      return { ...restData, data: [...newArray] };
    } else {
      return x;
    }
  });
};

export const calByMaxTemp = (
  data: ExtendedWeatherTypes[],
  calculator: number,
  index: number
) => {
  return data.map((x: ExtendedWeatherTypes, i: number) => {
    if (index === i) {
      const { data, ...restData } = x;
      const newArray = data.filter((day: Days) => day.temp >= calculator);
      return { ...restData, data: [...newArray] };
    } else {
      return x;
    }
  });
};
