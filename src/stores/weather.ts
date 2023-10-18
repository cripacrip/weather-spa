import { defineStore } from "pinia";
import { fetchWeatherData } from "@/api";
import { ref } from 'vue'
import { mainWeatherInfo } from '@/shared-types'

export const useWeatherStore = defineStore('weatherStore', () => {
  const cityWeather = ref<mainWeatherInfo[]>([])

  const getWeather = async (city: string) => {
    try {
      await fetchWeatherData(city).then(response => {
        cityWeather.value.push(response.data)
      })
    } catch (err) {
      console.log(err)
    }
  }
  return {
    getWeather,
    cityWeather
  }
})
