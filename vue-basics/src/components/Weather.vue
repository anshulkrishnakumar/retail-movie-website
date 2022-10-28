<script setup>
import axios from "axios";

const weather = (await axios.get("https://api.open-meteo.com/v1/forecast", {
  params: {
    latitude: 43.6532,
    longitude: 79.3832,
    current_weather: true,
  }
})).data;
let condition = "";

switch (weather.current_weather.weathercode) {
  case 0:
    condition = "Clear sky"
    break;
  case 1:
  case 2:
  case 3:
    condition = "Mainly clear, partly cloudy, and overcast"
    break;

    // 45, 48	Fog and depositing rime fog
    // 51, 53, 55	Drizzle: Light, moderate, and dense intensity
    // 56, 57	Freezing Drizzle: Light and dense intensity
    // 61, 63, 65	Rain: Slight, moderate and heavy intensity
    // 66, 67	Freezing Rain: Light and heavy intensity
    // 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
    // 77	Snow grains
    // 80, 81, 82	Rain showers: Slight, moderate, and violent
    // 85, 86	Snow showers slight and heavy
    // 95 * Thunderstorm: Slight or moderate
    // 96, 99 * Thunderstorm with slight and heavy hail

    console.log(weather);
}
</script>

<template>
  <div class="weather-container">
    <p>Toronto</p>
    <p>Lat: {{ weather.latitude }} deg.</p>
    <p>Long: {{ weather.longitude }} deg.</p>
    <p>Temp: {{ weather.current_weather.temperature }} C</p>
    <p>Windspeed: {{ weather.current_weather.windspeed }} km/h</p>
    <p>Wind Direction: {{ weather.current_weather.winddirection }} deg.</p>
    <p>{{ condition }}</p>
  </div>
</template>

<style scoped>
  .weather-container p {
    color: white;
    font-size: 1.25rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>