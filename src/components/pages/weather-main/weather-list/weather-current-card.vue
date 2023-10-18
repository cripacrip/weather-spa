<template>
  <div class="current-card">
    {{ props.currentCity.name }}
  </div>
</template>

<script setup lang="ts">
import { mainWeatherInfo } from '@/shared-types'

const props = defineProps<{
  currentCity: mainWeatherInfo,
}>();
</script>
