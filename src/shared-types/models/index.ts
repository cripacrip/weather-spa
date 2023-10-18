import { CLOUDS, COORD, MAIN_INFO, SYS, WIND, WEATHER } from './weatherSubInfo'

export interface mainWeatherInfo {
  base: string;
  clouds: CLOUDS;
  cod: number;
  coord: COORD;
  dt: number;
  id: number;
  main: MAIN_INFO;
  name: string;
  sys: SYS;
  timezone: number;
  visibility: number;
  weather: WEATHER;
  wind: WIND
}
