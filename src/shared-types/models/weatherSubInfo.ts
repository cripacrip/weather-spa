export interface SYS {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CLOUDS {
  all: number;
}

export interface WEATHER {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface MAIN_INFO {
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface COORD {
  lat: number;
  lon: number;
}

export interface WIND {
  deg: number;
  gust: number;
  speed: number;
}
