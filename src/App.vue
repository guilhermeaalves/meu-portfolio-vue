<template>
  <div class="app-container w-100vw h-100vh">
    <Navbar />
    <Home />
  </div>
  <about />
</template>

<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Globe from "./components/Globe.vue";
</script>

<style>
.globe-wrapper {
  width: 600px;
  height: 400px;
  position: relative;
}
</style>
