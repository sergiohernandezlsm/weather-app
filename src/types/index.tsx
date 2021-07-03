export interface DayComunDetails {
  datetime: string;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
  wind_cdir: string;
  wind_dir: number;
  temp: number;
}

export interface Days extends DayComunDetails {
  max_temp: number;
  min_temp: number;
}
export interface Day extends DayComunDetails {
  city_name: string;
  clouds: number;
}

export interface ExtendedWeatherTypes {
  city_name: string;
  country_code: string;
  data: Days[];
}

export interface CurrentWeatherTypes {
  data: Day[];
}
