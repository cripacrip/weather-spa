<template>
  <div class="dashboard">
      <input type="text" v-model="searchQuery">
      <button @click="searchWeatherOfCity">Search</button>

      <WeatherCard v-for="item in weatherStore.cityWeather" :key="item.id" :item="item" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useWeatherStore } from '@/stores/weather'
import WeatherCard from '@/components/weather-card.vue'

const weatherStore = useWeatherStore()
const searchQuery  = ref('')

const searchWeatherOfCity = (() => {
  weatherStore.getWeather(searchQuery.value)
  searchQuery.value = ''
})
</script>

<style scoped lang="scss">
.dashboard {
display: flex;
background-color: var(--app-bg-color);
min-height: 100vh;
}
</style>
