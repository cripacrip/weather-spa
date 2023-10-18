<template>
    <div class="layout">
        <h1 class="layout-head">Welcome to weather App</h1>
        <button @click="goToWeather">Go to Weather Main</button>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useGeolocationStore } from '@/stores/geolocation'
import { useWeatherStore } from '@/stores/weather'

const router = useRouter();
const geolocationStore = useGeolocationStore()
const weatherStore = useWeatherStore()

const goToWeather = () => {
   router.push('/weather');
};

onMounted(async () => {
  geolocationStore.getUserGeolocation()
  weatherStore
});

</script>
