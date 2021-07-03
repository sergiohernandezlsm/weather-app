export interface DaysInterface {
  datetime: string;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
  wind_cdir: string;
  wind_dir: number;
  temp: number;
  max_temp: number;
  min_temp: number;
}
export interface WeatherInterface {
  city_name: string;
  country_code: string;
  data: DaysInterface[];
}
