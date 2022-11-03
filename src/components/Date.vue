<script setup>
import { ref } from "vue";

let date = ref(0);
let time = ref(0);

setInterval(() => {
  const data = new Date(Date.now()).toUTCString().split(" ");
  date.value = `${data.at(0)} ${data.at(1)} ${data.at(2)} ${data.at(3)}`;
  time.value = data.at(4);
}, 1000);
</script>

<template>
  <div class="date-container">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<style scoped>
.date-container .date {
  font-size: 2rem;
  font-weight: bold;
}
.date-container .time {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
