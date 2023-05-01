export interface Weather {
  coord: CoordinatesInterface;
  weather: WeatherInterface[];
  base: string;
  main: MainInterface;
  visibility: number;
  wind: WindInterface;
  rain: RainInterface;
  clouds: CloudsInterface;
  dt: number;
  sys: SysInterface;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface CloudsInterface {
  all: number;
}

export interface CoordinatesInterface {
  lon: number;
  lat: number;
}

export interface MainInterface {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface RainInterface {
  '1h': number;
}

export interface SysInterface {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherInterface {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WindInterface {
  speed: number;
  deg: number;
}
