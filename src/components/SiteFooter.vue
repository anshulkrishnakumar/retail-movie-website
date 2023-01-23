<script setup>
</script>

<template>
    <div class="footer-container">
        <p class="company">Movie Hub</p>
        <p class="name">anshulkrishnakumar</p>
        <p class="location">Toronto</p>
    </div>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
@font-face {
    font-family: logofont;
    src: url(../assets/fonts/Nabla.ttf);
}
@font-face {
    font-family: textfont;
    src: url(../assets/fonts/Lato.ttf);
}
.footer-container {
    height: 6em;
    background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
}
p {
    position: absolute;
    padding: 2em;
    font-weight: bold;
    color: white;
    font-family: "textfont";
}
.company {
    left: 0;
    right: 0;
    text-align: center;
    font-family: "logofont";
}
.location {
    right: 0;
}
</style>