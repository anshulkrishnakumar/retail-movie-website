<script setup>
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();

const changeCity = () => {
  store.city = "Calgary";
  store.increment();
};

const weather = (
  await axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude: 43.6532,
      longitude: 79.3832,
      current_weather: true,
    },
  })
).data;
let condition = "";

switch (weather.current_weather.weathercode) {
  case 0:
    condition = "Clear sky";
    break;
  case 1:
  case 2:
  case 3:
    condition = "Mainly clear, partly cloudy, and overcast";
    break;
}
</script>

<template>
  <div class="weather-container">
    <p>{{ store.city }}</p>
    <p>{{ store.count }}</p>
    <p>Lat: {{ weather.latitude }} deg.</p>
    <p>Long: {{ weather.longitude }} deg.</p>
    <p>Temp: {{ weather.current_weather.temperature }} C</p>
    <p>Windspeed: {{ weather.current_weather.windspeed }} km/h</p>
    <p>Wind Direction: {{ weather.current_weather.winddirection }} deg.</p>
    <p>{{ condition }}</p>
    <button @click="changeCity()">Change</button>
  </div>
</template>

<style scoped>
.weather-container p {
  color: white;
  font-size: 1.25rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
