<template>
  <div class="dashboard">
      <WeatherCurrentCard :currentCity="weatherStore.currentCityWeather"/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useWeatherStore } from '@/stores/weather'
import { useGeolocationStore } from '@/stores/geolocation'
import WeatherCurrentCard from '@/components/pages/weather-main/weather-list/weather-current-card.vue'

const weatherStore = useWeatherStore()
const geolocationStore = useGeolocationStore()
const storeCity = localStorage.getItem('currentCity')

const searchWeatherOfCity = (() => {
  weatherStore.getWeatherLocationCity(geolocationStore.userCity || storeCity)
})
onMounted(() => {
  geolocationStore.getUserGeolocation()
  weatherStore
  geolocationStore
  searchWeatherOfCity()
})
</script>

<style scoped lang="scss">
.dashboard {
display: flex;
background-color: var(--app-bg-color);
min-height: 100vh;
}
</style>
