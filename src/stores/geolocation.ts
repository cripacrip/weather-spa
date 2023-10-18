import { defineStore } from "pinia";
import { ref } from 'vue'

export const useGeolocationStore = defineStore('geolocationStore', () => {
  const userCity = ref('')

  const getUserGeolocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&accept-language=en`);
          const data = await response.json();
          userCity.value = data.address.city || data.address.town || data.address.village;
          localStorage.setItem('currentCity', userCity?.value)
          console.log("User's city:", userCity.value);
        } catch (error) {
          console.error('Error getting city:', error);
        }
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  return {
    getUserGeolocation,
    userCity
  }
})
