<script setup>
import { ref } from 'vue';
const appeal = ref("");
let i = 0;
let goal = "Where Imagination Meets Reality";
function typeWriter() {
    if (i < goal.length) {
        appeal.value += goal.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}
typeWriter();
</script>

<template>
    <div class="hero-container"></div>
    <p>{{ appeal }}</p>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
@font-face {
    font-family: appealfont;
    src: url(../assets/fonts/PatuaOne.ttf);
}
.hero-container {
    height: 53em;
    background-image: url("https://wallpapers.com/images/high/1080p-hd-iron-man-walking-away-from-explosion-j205grww80ib8lgm.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
p {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    font-size: 2.5em;
    font-family: 'appealfont';
    color: white;
}
</style>