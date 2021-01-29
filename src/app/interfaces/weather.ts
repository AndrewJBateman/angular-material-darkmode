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

interface CloudsInterface {
  all: number;
}

interface CoordinatesInterface {
  lon: number;
  lat: number;
}

interface MainInterface {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface RainInterface {
  '1h': number;
}

interface SysInterface {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface WeatherInterface {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface WindInterface {
  speed: number;
  deg: number;
}
