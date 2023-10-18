import axios from 'axios';

const API_KEY = '944ee63ff38c2ee5622e09b788ed2f3d'

export async function fetchWeatherData(city: string) {
 return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
}

export async function getCity(name: string) {
  return await axios.get(`https://api.api-ninjas.com/v1/city?name=${name}`)
}
