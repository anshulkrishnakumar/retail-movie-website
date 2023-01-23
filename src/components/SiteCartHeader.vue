<script setup>

</script>

<template>
    <div class="header-container">
        <h1>Movie Hub</h1>
        <a href="/">MH</a>
        <RouterLink to="/purchase" custom v-slot="{ navigate }">
            <button @click="navigate" role="link">Featured</button>
        </RouterLink>
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

.header-container {
    background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
    height: 7em;
}

button:hover {
    cursor: pointer;
}

h1 {
    padding-top: 1em;
    font-size: 2em;
    color: white;
    text-align: center;
    font-family: 'logofont';
}

a {
    position: absolute;
    top: 0;
    padding: 1em;
    font-size: 2em;
    font-family: 'logofont';
    text-decoration: none;
}

button {
    position: absolute;
    right: 0;
    top: 0;
    margin: 2.5em;
    padding: 0.5em;
    font-size: 1em;
    border-radius: 10px;
    border: 0.1em solid grey;
    font-weight: bold;
    color: grey;
    background-color: transparent;
}

button:hover {
    color: orange;
    border-color: orange;
    transition: 0.5s;
}

@media (min-width: 1280px) {
    img {
        margin: 2%;
        width: 16%;
        border-radius: 20px;
        box-shadow: 0 0 10px 0 black;
    }
}

@media (min-width: 1024px) and (max-width: 1279px) {
    img {
        margin: 2%;
        width: 21%;
        border-radius: 20px;
        box-shadow: 0 0 10px 0 black;
    }
}

@media (min-width: 767px) and (max-width: 1023px) {
    img {
        margin: 2%;
        width: 21%;
        border-radius: 20px;
        box-shadow: 0 0 10px 0 black;
    }
}

@media (min-width: 480px) and (max-width: 766px) {
    img {
        margin: 2%;
        width: 46%;
        border-radius: 20px;
        box-shadow: 0 0 10px 0 black;
    }
}

@media (min-width: 320px) and (max-width: 480px) {
    img {
        margin: 2%;
        width: 96%;
        border-radius: 20px;
        box-shadow: 0 0 10px 0 black;
    }
}
</style>