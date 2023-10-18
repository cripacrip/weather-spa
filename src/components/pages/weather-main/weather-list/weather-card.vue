<template>
  <div class="weather-card">
    {{ props.item.name }}
  </div>
</template>

<script setup lang="ts">
import { mainWeatherInfo } from '@/shared-types'

const props = defineProps<{
  item: mainWeatherInfo;
}>();
</script>
