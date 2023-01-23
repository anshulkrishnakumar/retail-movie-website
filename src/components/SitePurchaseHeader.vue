<script setup>
import { useStore } from "../store/index.js";

const store = useStore();

</script>

<template>
    <div class="header-container">
        <h1>Movie Hub</h1>
        <a href="/">MH</a>
        <RouterLink to="/cart" custom v-slot="{ navigate }">
            <img @click="navigate" src="../assets/favicon/carts.png" alt="">
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

@media (min-width: 1280px) {
    .header-container {
        height: 7em;
        background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
    }

    a {
        position: absolute;
        top: 0;
        padding: 1em;
        font-size: 2em;
        font-family: 'logofont';
        text-decoration: none;
    }

    h1 {
        font-size: 200%;
        padding: 1em;
        text-align: center;
        font-family: 'logofont';
    }

    img {
        position: absolute;
        top: 0;
        right: 0;
        padding-top: 2em;
        padding-right: 2em;
        height: 6.5%;
    }

    p {
        right: 0;
        font-size: 175%;
        text-align: center;
        color: white;
    }

    img:hover {
        cursor: pointer;
    }
}

@media (min-width: 767px) and (max-width: 1279px) {
    .header-container {
        height: 5em;
        background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
    }

    a {
        position: absolute;
        top: 0;
        padding-top: 0.75em;
        padding-left: 1.5em;
        font-family: "logofont";
        text-decoration: none;
        font-size: 150%;
    }

    h1 {
        font-size: 150%;
        padding: 0.75em;
        text-align: center;
        font-family: 'logofont';
    }

    img {
        position: absolute;
        top: 0;
        right: 0;
        padding-top: 1.5em;
        padding-right: 1.5em;
        height: 4.5%;
    }

    .cart-number {
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 0.75em;
        margin-right: 0.75em;
        border-radius: 100%;
        height: 1.5em;
        width: 1.5em;
        background-color: red;
    }

    p {
        right: 0;
        font-size: 125%;
        text-align: center;
        color: white;
    }

    img:hover {
        cursor: pointer;
    }
}

@media (min-width: 480px) and (max-width: 766px) {
    .header-container {
        height: 4em;
        background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
    }

    a {
        position: absolute;
        top: 0;
        padding-top: 0.75em;
        padding-left: 1.5em;
        font-family: "logofont";
        text-decoration: none;
        font-size: 125%;
    }

    h1 {
        font-size: 125%;
        padding: 0.75em;
        text-align: center;
        font-family: 'logofont';
    }

    img {
        position: absolute;
        top: 0;
        right: 0;
        padding-top: 1.25em;
        padding-right: 1.5em;
        height: 3.5%;
    }

    .cart-number {
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 1.25em;
        margin-right: 3.5em;
        border-radius: 100%;
        height: 1.5em;
        width: 1.5em;
        background-color: red;
    }

    p {
        right: 0;
        font-size: 125%;
        text-align: center;
        color: white;
    }

    img:hover {
        cursor: pointer;
    }
}

@media (min-width: 320px) and (max-width: 480px) {
    .header-container {
        height: 3em;
        background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
    }

    a {
        position: absolute;
        top: 0;
        padding-top: 0.75em;
        padding-left: 0.75em;
        font-family: "logofont";
        text-decoration: none;
        font-size: 100%;
    }

    h1 {
        font-size: 100%;
        padding: 0.75em;
        text-align: center;
        font-family: 'logofont';
    }

    img {
        position: absolute;
        top: 0;
        right: 0;
        padding-top: 1em;
        padding-right: 0.75em;
        height: 2.5%;
    }

    .cart-number {
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 1em;
        margin-right: 2.25em;
        border-radius: 100%;
        height: 1.25em;
        width: 1.25em;
        background-color: red;
    }

    p {
        right: 0;
        font-size: 100%;
        text-align: center;
        color: white;
    }

    img:hover {
        cursor: pointer;
    }
}
</style>